const CoreModel = require("./CoreModel");

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
	 * @throw {Error} An error
	 */
	static async findAllFull() {
		try {
			// We select the function to create a database
			// that contains a select with join of the database
			const results = await CoreModel.getArray(
				`select * from house_full_find_all`
			);
			return results.map((result) => new House(result));
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
	static async findFour() {
		try {
			// We select the function to create a database
			// that contains a select with join of the database
			const results = await CoreModel.getArray(
				`SELECT * FROM house_find_four`
			);
			return results.map((result) => new House(result));
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
	/**
	 * Retrieves one House with his owner, animals, and abscenses from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} One House with his owner, animals, and abscenses in database
	 * @throw {Error} An error
	 */
	static async findOneFull(id) {
		try {
			// We select the function to create a database
			// that contains a select with join where id = id($1)
			const results = await CoreModel.getRow(
				`select * from house_full_find_one($1)`,
				[id]
			);
			return results ? new House(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves all Houses from database
	 * @static
	 * @async
	 * @returns {Array<House>} All Houses in database
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			// We select the view to create a database(example view in migrations/deploy/domain)
			const results = await CoreModel.getArray(`select * from house_find_all`);
			return results.map((result) => new House(result));
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one House from database
	 * @static
	 * @async
	 * @returns {Object<House>} One House in database
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			// We select the function to create a database
			// that contains a select * from house_find_all where id = id($1)
			// select * from house_find_all refers to the view
			// (example function with select in migrations/deploy/domain)
			const results = await CoreModel.getRow(
				`select * from house_find_one($1)`,
				[id]
			);
			return results ? new House(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Creates a new House in database
	 * @async
	 * @returns {Object<House>} Creates a new House in database
	 * @throw {Error} An error
	 */
	async save() {
		try {
			// We select the add function to create a database(example function in migration/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_house($1)", [
				this,
			]);
			return result ? new House(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a House in database
	 * @async
	 * @returns {Object<House>} Updates a House in database
	 * @throw {Error} An error
	 */
	async update() {
		try {
			// We select the update function to create a database(example function in migration/deploy/function)
			const result = await CoreModel.getRow(`SELECT * FROM update_house($1)`, [
				this,
			]);
			return result ? new House(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
	/**
	 * Delete a House in database
	 * @async
	 * @returns {Object<House>} Delete a House in database
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from house where id = $1", [id]);
			console.log('return');
			return;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
};
