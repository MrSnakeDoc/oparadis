-- Deploy oparadis:function to pg

BEGIN;

create or replace function add_customer(json) returns customer as $$
	insert into "customer"(email, password, firstname, lastname, phone_number, customer_url)
		values ($1->>'email', $1->>'password', $1->>'firstname', $1->>'lastname', $1->>'phone_number', $1->>'customer_url') returning *;
$$ language sql strict;

create or replace function update_customer(json) returns customer as $$
	update "customer" set 
		email = $1->>'email',
    	password = $1->>'password',
		firstname = $1->>'firstname',
		lastname = $1->>'lastname',
		phone_number = $1->>'phone_number',
		customer_url = $1->>'customer_url'
    where id = ($1->>'id')::int returning *;
$$ language sql strict;

create or replace function add_animal(json) returns animal as $$
	insert into "animal"("type", race, diseases, notes, photo_url, customer_id)
		values ($1->>'type', $1->>'race', $1->>'diseases', $1->>'notes', $1->>'photo_url', ($1->>'customer_id')::int) returning *;
$$ language sql strict;

create or replace function update_animal(json) returns animal as $$
	update "animal" set 
		"type" = $1->>'type',
    	race = $1->>'race',
		diseases = $1->>'diseases',
		notes = $1->>'notes',
		photo_url = $1->>'photo_url',
		customer_id = ($1->>'customer_id')::int
    where id = ($1->>'id')::int returning *;
$$ language sql strict;

create or replace function add_house(json) returns house as $$
	insert into "house"(address, zip_code, city, country, "type", title, nb_rooms, nb_bedrooms, surface, area, "floor", description, latitude, longitude, map, customer_id)
		values ($1->>'address',
		$1->>'zip_code',
		$1->>'city',
		$1->>'country',
		$1->>'type',
		$1->>'title',
		($1->>'nb_rooms')::int,
		($1->>'nb_bedrooms')::int,
		($1->>'surface')::int,
		($1->>'area')::int,
		($1->>'floor')::int,
		$1->>'description',
		$1->>'latitude',
		$1->>'longitude',
		$1->>'map',
		($1->>'customer_id')::int) returning *;
$$ language sql strict;

create or replace function update_house(json) returns house as $$
	update "house" set 
		address = $1->>'address',
		zip_code = $1->>'zip_code',
		city = $1->>'city',
		country = $1->>'country',
		"type" = $1->>'type',
		title = $1->>'title',
    	nb_rooms = ($1->>'nb_rooms')::int,
		nb_bedrooms = ($1->>'nb_bedrooms')::int,
		surface = ($1->>'surface')::int,
		area = ($1->>'area')::int,
		"floor" = ($1->>'floor')::int,
		description = $1->>'description',
		latitude = $1->>'latitude',
		longitude = $1->>'longitude',
		map = $1->>'map',
		customer_id = ($1->>'customer_id')::int
    where id = ($1->>'id')::int returning *;
$$ language sql strict;

create or replace function add_photo(json) returns photo as $$
	insert into "photo"(url, house_id)
		values ($1->>'url',($1->>'house_id')::int) returning *;
$$ language sql strict;

create or replace function update_photo(json) returns photo as $$
	update "photo" set 
		url = $1->>'url',
		house_id = ($1->>'house_id')::int
    where id = ($1->>'id')::int returning *;
$$ language sql strict;

create or replace function add_absentee(json) returns absentee as $$
	insert into "absentee"(starting_date, ending_date, customer_id)
		values (($1->>'starting_date')::date, ($1->>'ending_date')::date, ($1->>'customer_id')::int) returning *;
$$ language sql strict;

create or replace function update_absentee(json) returns absentee as $$
	update "absentee" set 
		starting_date = ($1->>'starting_date')::date,
		ending_date = ($1->>'ending_date')::date,
		customer_id = ($1->>'customer_id')::int
    where id = ($1->>'id')::int returning *;
$$ language sql strict;

COMMIT;