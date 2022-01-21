-- Revert oparadis:domain from pg

BEGIN;

ALTER TABLE HOUSE 
    ALTER COLUMN nb_rooms TYPE int,
    ALTER COLUMN nb_bedrooms TYPE int,
    ALTER COLUMN surface TYPE int,
    ALTER COLUMN area TYPE int,
    ALTER COLUMN "floor" TYPE int;

DROP DOMAIN posint;

COMMIT;
