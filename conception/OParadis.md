**absentee** (<ins>ref_absentee</ins>, starting_date, ending_date, _ref_customer_)  
**animal** (<ins>ref_animal</ins>, type, race, diseases, notes, photo, validation, _ref_house_)  
**photo** (<ins>ref_photo</ins>, photo, validation, _ref_house_)  
**house** (<ins>ref_house</ins>, address, zip_code, city, type, title, nb_rooms, nb_bedrooms, surface, area, floor, description, latitude, longitude, map, internet, washing_machine, tv, hoven, microwave, dishwasher, bathtub, shower, parking, created_at, update_at, validation, _ref_house_type_)  
**customer** (<ins>ref_customer</ins>, email, password, firstname, lastname, phone_number, photo, created_at, _ref_role_, _ref_house_)  
**A HOMESITTER** (<ins>_ref_customer_</ins>, <ins>_ref_customer homesitter_</ins>)  
**role** (<ins>ref_role</ins>, role)  
**plant** (<ins>ref_plant</ins>, type, notes, photo, validation, _ref_house_)  
**house_type** (<ins>ref_house_type</ins>, type)