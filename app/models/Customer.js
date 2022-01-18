const client = require("../database.js");

/**
 * @typedef {Object} Customer
 * @property {number} id
 * @property {string} email
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} phone_number
 * @property {string} customer_url
 */
module.exports = class Customer {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Customer with their houses, animals, and abscenses from database
	 * @static
	 * @async
	 * @returns {Array<Customer>} all Customers with their houses, animals, and abscenses in database
	 * @throws {Error} An error
	 */
	static async findAllFull() {
		try {
			const { rows } = await client.query(`
			SELECT customer.id, customer.email, customer.firstname, customer.lastname, customer.phone_number, customer.customer_url,
				(SELECT array_agg(json_build_object(
					'id', house.id,
					'address', house.address,
					'zip_code', house.zip_code,
					'city', house.city,
					'country', house.country,
					'type', house.type,
					'title', house.title,
					'nb_rooms', house.nb_rooms,
					'nb_bedrooms', house.nb_bedrooms,
					'surface', house.surface,
					'area', house.area,
					'floor', house.floor,
					'description', house.description,
					'latitude', house.latitude,
					'longitude', house.longitude,
					'map', house.map) 
					ORDER BY house.id asc)
				FROM house WHERE house.customer_id= customer.id)
				AS house,
				(SELECT array_agg(json_build_object(
					'id', animal.id,
					'type', animal.type,
					'race', animal.race,
					'diseases', animal.diseases,
					'notes', animal.notes,
					'photo_url', animal.photo_url)
				ORDER BY animal.id asc)
				FROM animal WHERE animal.customer_id= customer.id)
				AS animals,
				(SELECT array_agg(json_build_object(
					'id', photo.id,
					'url', photo.url)
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
			FROM customer
			full outer JOIN house ON house.customer_id = customer.id
			full outer JOIN animal ON animal.customer_id = customer.id
			full outer JOIN photo ON photo.house_id = house.id
			full outer JOIN absentee ON absentee.customer_id = customer.id
			GROUP BY customer.id
			ORDER BY customer.id;`);
			return rows.map((row) => new Customer(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Customer with his house, animals, and abscenses from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} One Customer with his house, animals, and abscenses in database
	 * @throws {Error} An error
	 */
	static async findOneFull(id) {
		try {
			const { rows } = await client.query(
				`
			SELECT customer.email, customer.firstname, customer.lastname, customer.phone_number, customer.photo, customer.created_at, customer.updated_at
				(SELECT array_agg(json_build_object(
					'id', house.id,
					'title', house.title,
					'address', house.address,
					'zip_code', house.zip_code,
					'city', house.city,
					'country', house.country,
					'type', house.type,
					'nb_rooms', house.nb_rooms,
					'nb_bedrooms', house.nb_bedrooms,
					'surface', house.surface,
					'area', house.area,
					'floor', house.floor,
					'description', house.description,
					'latitude', house.latitude,
					'longitude', house.longitude,
					'map', house.map
					'internet', house.internet,
					'washing_machine', house.washing_machine,
					'TV', house.TV,
					'hoven', house.microwave,
					'dishwasher', house.diswasher,
					'bathtub', house.bathtube,
					'shower', house.shower,
					'parking', house.parking,
					'created_at', house.created_at,
					'updated_at', house.updated_at,
					'validation', house.validation))
				FROM house WHERE house.customer_id = customer.id)
				AS house,
				(SELECT array_agg(json_build_object(
					'id', animal.id,
					'type', animal.type,
					'race', animal.race,
					'diseases', animal.diseases,
					'notes', animal.notes,
					'photo', animal.photo
					'created_at', animal.created_at,
					'updated_at', animal.updated_at,
					'validation', animal.validation)
				ORDER BY animal.id asc)
				FROM animal WHERE animal.customer_id= customer.id)
				AS animals,
				(SELECT array_agg(json_build_object(
					'id', plant.id,
					'type', plant.type,
					'notes', plant.notes,
					'photo', plant.photo
					'created_at', plant.created_at,
					'updated_at', plant.updated_at,
					'validation', plant.validation)
				ORDER BY plant.id asc)
				FROM plant WHERE plant.customer_id = customer.id)
				AS plant,
				(SELECT array_agg(json_build_object(
					'id', photo.id,
					'url', photo.url,
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
			FROM customer
			full outer JOIN house ON house.customer_id = customer.id
			full outer JOIN animal ON animal.customer_id = customer.id
			full outer JOIN plant ON animal.customer_id = customer.id
			full outer JOIN photo ON photo.house_id = house.id
			full outer JOIN absentee ON absentee.customer_id = customer.id
			WHERE customer.id = $1
			GROUP BY customer.id
			ORDER BY customer.id;`,
				[id]
			);
			return rows[0] ? new Customer(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Array<Customer>} All Customers in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM customer");
			return rows.map((row) => new Customer(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Customer from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} One Customer in database
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query(
				"SELECT * FROM customer where id = $1",
				[id]
			);
			return rows[0] ? new Customer(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new Customer in database
	 * @async
	 * @returns {Object<Customer>} Creates a new Customer in database
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_customer($1)", [
				this,
			]);
			return rows[0] ? new Customer(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Customer in database
	 * @async
	 * @returns {Object<Customer>} Updates a Customer in database
	 * @throws {Error} An error
	 */
	async update() {
		try {
			const { rows } = await client.query("SELECT * FROM update_customer($1)", [
				this,
			]);
			return rows[0] ? new Customer(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a Customer in database
	 * @async
	 * @returns {String} Delete a Customer in database
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from customer where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
