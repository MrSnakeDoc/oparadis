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
	 * @throws {Error} An error
	 */
	static async findAllFull() {
		try {
			const results = await CoreModel.getArray(
				`select * from house_full_find_all`
			);
			return results.map((result) => new House(result));
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
			const results = await CoreModel.getRow(
				`select * from house_full_find_one($1)`,
				[id]
			);
			return results ? new House(results) : undefined;
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
			const results = await CoreModel.getArray(`select * from house_find_all`);
			return results.map((result) => new House(result));
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
			const results = await CoreModel.getRow(
				`select * from house_find_one($1)`,
				[id]
			);
			return results ? new House(results) : undefined;
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
			const results = await CoreModel.getRow("SELECT * FROM add_house($1)", [
				this,
			]);
			return results ? new House(results) : undefined;
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
		try {
			const results = await CoreModel.getRow(`SELECT * FROM update_house($1)`, [
				this,
			]);
			return results ? new House(results) : undefined;
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
			await CoreModel.getRow("delete from house where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
