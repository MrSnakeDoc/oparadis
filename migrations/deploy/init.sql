-- Deploy oparadis:init to pg

BEGIN;

CREATE TABLE ROLE (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    role TEXT NOT NULL unique
);

CREATE TABLE CUSTOMER (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text not null unique,
    password text not null,
    firstname text not null,
    lastname text not null,
    pseudo text DEFAULT null,
    phone_number text not null,
    photo text,
    role_id int NOT NULL references role(id) default 2,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE CONNECTION (
    home_owner int not null REFERENCES customer(id) ON DELETE CASCADE,
    home_sitter int not null REFERENCES customer(id) ON DELETE CASCADE,
    PRIMARY KEY (home_owner,home_sitter)
);

CREATE TABLE house_type (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" text not null unique
);

CREATE TABLE COUNTRY (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country text not null unique
);

CREATE TABLE HOUSE (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    address text not null,
    zip_code text not null,
    city text not null,
    country int not null REFERENCES country(id),
    "type" int not null REFERENCES house_type(id),
    title text,
    nb_rooms int,
    nb_bedrooms int,
    surface int,
    area int,
    "floor" int,
    description TEXT,
    latitude text not null,
    longitude text not null,
    map text not null,
    internet BOOLEAN NOT NULL DEFAULT false,
    washing_machine BOOLEAN NOT NULL DEFAULT false,
    TV BOOLEAN NOT NULL DEFAULT false,
    hoven BOOLEAN NOT NULL DEFAULT false,
    microwave BOOLEAN NOT NULL DEFAULT false,
    dishwasher BOOLEAN NOT NULL DEFAULT false,
    bathtub BOOLEAN NOT NULL DEFAULT false,
    shower BOOLEAN NOT NULL DEFAULT false,
    parking BOOLEAN NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz NOT NULL DEFAULT NOW(),
    validation BOOLEAN NOT NULL DEFAULT false,
    customer_id int not null REFERENCES customer(id) ON DELETE CASCADE
);

CREATE TABLE ANIMAL (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" text not null,
    race text,
    diseases text,
    notes text,
    photo text,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz NOT NULL DEFAULT NOW(),
    validation BOOLEAN NOT NULL DEFAULT false,
    customer_id int not null REFERENCES customer(id) ON DELETE CASCADE
);

CREATE TABLE PLANT (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type TEXT NOT NULL,
    notes text,
    photo text,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz NOT NULL DEFAULT NOW(),
    validation BOOLEAN NOT NULL DEFAULT false,
    customer_id INT NOT NULL REFERENCES customer(id) on delete cascade
);

CREATE TABLE PHOTO (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    photo text not null,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz NOT NULL DEFAULT NOW(),
    validation BOOLEAN NOT NULL DEFAULT false,
    house_id int not null REFERENCES house(id) ON DELETE CASCADE
);

CREATE TABLE ABSENTEE (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    starting_date TIMESTAMPTZ not null,
    ending_date TIMESTAMPTZ not null check (starting_date < ending_date),
    customer_id int not null REFERENCES customer(id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON house
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON ANIMAL
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON PLANT
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON PHOTO
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- CREATE OR REPLACE FUNCTION trigger_set_pseudo()
-- RETURNS TRIGGER AS $$
-- BEGIN

--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER set_pseudo
-- AFTER INSERT ON CUSTOMER
-- FOR EACH ROW
-- EXECUTE PROCEDURE trigger_set_pseudo();

COMMIT;