-- Revert oparadis:domain from pg

BEGIN;
DROP VIEW IF EXISTS house_find_four();

DROP FUNCTION IF EXISTS house_find_one(int);

DROP FUNCTION IF EXISTS house_full_find_one(int);

DROP VIEW IF EXISTS house_full_find_all;

DROP VIEW IF EXISTS house_find_all;

ALTER TABLE HOUSE 
    ALTER COLUMN nb_rooms TYPE int,
    ALTER COLUMN nb_bedrooms TYPE int,
    ALTER COLUMN surface TYPE int,
    ALTER COLUMN area TYPE int,
    ALTER COLUMN "floor" TYPE int;

DROP DOMAIN posint;

COMMIT;
