CREATE DATABASE OPARADIS;
\c OPARADIS;

CREATE TABLE ABSENTEE (
  ref_absentee VARCHAR(42),
  starting_date VARCHAR(42),
  ending_date VARCHAR(42),
  ref_customer VARCHAR(42),
  PRIMARY KEY (ref_absentee)
);

CREATE TABLE ANIMAL (
  ref_animal VARCHAR(42),
  type VARCHAR(42),
  race VARCHAR(42),
  diseases VARCHAR(42),
  notes VARCHAR(42),
  photo VARCHAR(42),
  validation VARCHAR(42),
  ref_house VARCHAR(42),
  PRIMARY KEY (ref_animal)
);

CREATE TABLE PHOTO (
  ref_photo VARCHAR(42),
  photo VARCHAR(42),
  validation VARCHAR(42),
  ref_house VARCHAR(42),
  PRIMARY KEY (ref_photo)
);

CREATE TABLE HOUSE (
  ref_house VARCHAR(42),
  address VARCHAR(42),
  zip_code VARCHAR(42),
  city VARCHAR(42),
  type VARCHAR(42),
  title VARCHAR(42),
  nb_rooms VARCHAR(42),
  nb_bedrooms VARCHAR(42),
  surface VARCHAR(42),
  area VARCHAR(42),
  floor VARCHAR(42),
  description VARCHAR(42),
  latitude VARCHAR(42),
  longitude VARCHAR(42),
  map VARCHAR(42),
  internet VARCHAR(42),
  washing_machine VARCHAR(42),
  tv VARCHAR(42),
  hoven VARCHAR(42),
  microwave VARCHAR(42),
  dishwasher VARCHAR(42),
  bathtub VARCHAR(42),
  shower VARCHAR(42),
  parking VARCHAR(42),
  created_at VARCHAR(42),
  update_at VARCHAR(42),
  validation VARCHAR(42),
  ref_house_type VARCHAR(42),
  PRIMARY KEY (ref_house)
);

CREATE TABLE CUSTOMER (
  ref_customer VARCHAR(42),
  email VARCHAR(42),
  password VARCHAR(42),
  firstname VARCHAR(42),
  lastname VARCHAR(42),
  phone_number VARCHAR(42),
  photo VARCHAR(42),
  created_at VARCHAR(42),
  ref_role VARCHAR(42),
  ref_house VARCHAR(42),
  PRIMARY KEY (ref_customer)
);

CREATE TABLE A_HOMESITTER (
  ref_customer VARCHAR(42),
  ref_customer homesitter VARCHAR(42),
  PRIMARY KEY (ref_customer, ref_customer homesitter)
);

CREATE TABLE ROLE (
  ref_role VARCHAR(42),
  role VARCHAR(42),
  PRIMARY KEY (ref_role)
);

CREATE TABLE PLANT (
  ref_plant VARCHAR(42),
  type VARCHAR(42),
  notes VARCHAR(42),
  photo VARCHAR(42),
  validation VARCHAR(42),
  ref_house VARCHAR(42),
  PRIMARY KEY (ref_plant)
);

CREATE TABLE HOUSE_TYPE (
  ref_house_type VARCHAR(42),
  type VARCHAR(42),
  PRIMARY KEY (ref_house_type)
);

ALTER TABLE ABSENTEE ADD FOREIGN KEY (ref_customer) REFERENCES CUSTOMER (ref_customer);
ALTER TABLE ANIMAL ADD FOREIGN KEY (ref_house) REFERENCES HOUSE (ref_house);
ALTER TABLE PHOTO ADD FOREIGN KEY (ref_house) REFERENCES HOUSE (ref_house);
ALTER TABLE HOUSE ADD FOREIGN KEY (ref_house_type) REFERENCES HOUSE_TYPE (ref_house_type);
ALTER TABLE CUSTOMER ADD FOREIGN KEY (ref_house) REFERENCES HOUSE (ref_house);
ALTER TABLE CUSTOMER ADD FOREIGN KEY (ref_role) REFERENCES ROLE (ref_role);
ALTER TABLE A_HOMESITTER ADD FOREIGN KEY (ref_customer homesitter) REFERENCES CUSTOMER (ref_customer);
ALTER TABLE A_HOMESITTER ADD FOREIGN KEY (ref_customer) REFERENCES CUSTOMER (ref_customer);
ALTER TABLE PLANT ADD FOREIGN KEY (ref_house) REFERENCES HOUSE (ref_house);