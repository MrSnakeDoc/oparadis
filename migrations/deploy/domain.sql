-- Deploy oparadis:domain to pg

BEGIN;

CREATE DOMAIN posint AS INT CHECK(VALUE >= 0);

ALTER TABLE HOUSE 
    ALTER COLUMN nb_rooms TYPE posint,
    ALTER COLUMN nb_bedrooms TYPE posint,
    ALTER COLUMN surface TYPE posint,
    ALTER COLUMN area TYPE posint,
    ALTER COLUMN "floor" TYPE posint;

COMMIT;