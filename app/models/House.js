const client = require("../database.js");

/**
 * @typedef {Object} House
 * @property {number} id
 * @property {number} address
 * @property {number} zip_code
 * @property {number} city
 * @property {number} country
 * @property {number} type
 * @property {number} title
 * @property {number} nb_rooms
 * @property {number} nb_bedrooms
 * @property {number} surface
 * @property {number} area
 * @property {number} floor
 * @property {number} description
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} map
 * @property {number} id
 */

module.exports = class House {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Houses with their owner, animals, and abscenses from database
	 * @static
	 * @async
	 * @returns {Array<House>} all Houses with their owner, animals, and abscenses in database
	 * @throws {Error} An error
	 */
	static async findAllFull() {
		try {
			const { rows } = await client.query(`select * from house_view`);
			return rows.map((row) => new House(row));
		} catch (error) {
			console.log(error);
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one House with his owner, animals, and abscenses from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} One House with his owner, animals, and abscenses in database
	 * @throws {Error} An error
	 */
	static async findOneFull(id) {
		try {
			const { rows } = await client.query(
				`SELECT house.id,
				house.title,
				house.address,
				house.zip_code,
				house.city,
				(select json_agg(json_build_object(country.id,country.country)) from country
					where house.country = country.id) as country,
				(select json_agg(json_build_object(house_type.id,house_type.type)) from house_type
					where house_type.id = house.type) as type,
				house.nb_rooms,
				house.nb_bedrooms,
				house.surface,
				house.area,
				house.floor,
				house.description,
				house.latitude,
				house.longitude,
				house.map,
				house.internet,
				house.washing_machine,
				house.TV,
				house.microwave,
				house.dishwasher,
				house.bathtub,
				house.shower,
				house.parking,
				house.created_at,
				house.updated_at,
				house.validation,
				(SELECT array_agg(json_build_object(
					'id', customer.id,
					'email', customer.email,
					'firstname', customer.firstname,
					'lastname', customer.lastname,
					'phone_number', customer.phone_number,
					'photo', customer.photo, 
					'created_at', customer.created_at, 
					'updated_at', customer.updated_at))
				FROM customer WHERE customer.id = house.customer_id)
				AS customer,
				(SELECT array_agg(json_build_object(
					'id', animal.id,
					'type', animal.type,
					'race', animal.race,
					'diseases', animal.diseases,
					'notes', animal.notes,
					'photo', animal.photo,
					'created_at', animal.created_at,
					'updated_at', animal.updated_at,
					'validation', animal.validation)
				ORDER BY animal.id asc)
				FROM animal WHERE animal.customer_id = customer.id)
				AS animals,
				(SELECT array_agg(json_build_object(
					'id', plant.id,
					'type', plant.type,
					'notes', plant.notes,
					'photo', plant.photo,
					'created_at', plant.created_at,
					'updated_at', plant.updated_at,
					'validation', plant.validation)
				ORDER BY plant.id asc)
				FROM plant WHERE plant.customer_id = customer.id)
				AS plant,
				(SELECT array_agg(json_build_object(
					'id', photo.id,
					'photo', photo.photo,
					'created_at', photo.created_at,
					'updated_at', photo.updated_at,
					'validation', photo.validation)
				ORDER BY photo.id asc)
				FROM photo JOIN house ON house.customer_id = customer.id
				WHERE photo.house_id = house.id)
				AS photos,
				(SELECT array_agg(json_build_object(
					'id', id,
					'starting_date', starting_date,
					'ending_date', ending_date)
				ORDER BY absentee.id asc)
				FROM absentee WHERE absentee.customer_id= customer.id)
				AS absentee
		FROM house
		full outer JOIN customer ON customer.id = house.customer_id
		full outer JOIN animal ON animal.customer_id = customer.id
		full outer JOIN plant ON plant.customer_id = customer.id
		full outer JOIN photo ON photo.house_id = house.id
		full outer JOIN absentee ON absentee.customer_id = customer.id
		JOIN house_type ON house_type.id = house.type
		JOIN country ON country.id = house.country
		WHERE house.id = $1
		GROUP BY customer.id, house.id
		ORDER BY house.id;`,
				[id]
			);
			return rows[0] ? new House(rows) : undefined;
		} catch (error) {
			console.log(error);
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves all Houses from database
	 * @static
	 * @async
	 * @returns {Array<House>} All Houses in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query(`SELECT house.id,
			house.title,
			house.address,
			house.zip_code,
			house.city,
			(select json_agg(json_build_object(country.id,country.country)) from country
				where house.country = country.id) as country,
			(select json_agg(json_build_object(house_type.id,house_type.type)) from house_type
				where house_type.id = house.type) as type,
			house.nb_rooms,
			house.nb_bedrooms,
			house.surface,
			house.area,
			house.floor,
			house.description,
			house.latitude,
			house.longitude,
			house.map,
			house.internet,
			house.washing_machine,
			house.TV,
			house.microwave,
			house.dishwasher,
			house.bathtub,
			house.shower,
			house.parking,
			house.created_at,
			house.updated_at,
			house.validation FROM house`);
			return rows.map((row) => new House(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one House from database
	 * @static
	 * @async
	 * @returns {Object<House>} One House in database
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query(
				`select house.id,
			house.title,
			house.address,
			house.zip_code,
			house.city,
			(select json_agg(json_build_object(country.id,country.country)) from country
				where house.country = country.id) as country,
			(select json_agg(json_build_object(house_type.id,house_type.type)) from house_type
				where house_type.id = house.type) as type,
			house.nb_rooms,
			house.nb_bedrooms,
			house.surface,
			house.area,
			house.floor,
			house.description,
			house.latitude,
			house.longitude,
			house.map,
			house.internet,
			house.washing_machine,
			house.TV,
			house.microwave,
			house.dishwasher,
			house.bathtub,
			house.shower,
			house.parking,
			house.created_at,
			house.updated_at,
			house.validation from house where id = $1`,
				[id]
			);
			return rows[0] ? new House(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new House in database
	 * @async
	 * @returns {Object<House>} Creates a new House in database
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_house($1)", [
				this,
			]);
			return rows[0] ? new House(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a House in database
	 * @async
	 * @returns {Object<House>} Updates a House in database
	 * @throws {Error} An error
	 */
	async update() {
		//TODO verify modified field and update validation to true if certain fields are modified.

		// const tata = await House.findOne(this.id)
		console.log("model", this);
		// if ()...
		try {
			const { rows } = await client.query(`SELECT * FROM update_house($1)`, [
				this,
			]);
			return rows[0] ? new House(rows) : undefined;
		} catch (error) {
			console.log(error);
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a House in database
	 * @async
	 * @returns {Object<House>} Delete a House in database
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from house where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
