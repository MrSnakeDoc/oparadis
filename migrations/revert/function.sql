-- Revert oparadis:function from pg

BEGIN;

DROP FUNCTION add_customer, update_customer, add_animal, update_animal, add_house, update_house, add_photo, update_photo, add_absentee, update_absentee, add_plant, update_plant;

COMMIT;
