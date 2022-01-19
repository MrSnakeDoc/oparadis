const client = require("../database.js");

/**
 * @typedef {Object} Animal
 * @property {number} id
 * @property {string} type
 * @property {string} race
 * @property {string} diseases
 * @property {string} notes
 * @property {string} photo
 */
module.exports = class Country {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Country from database
	 * @static
	 * @async
	 * @returns {Array<Country>} All Country in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM country");
			return rows.map((row) => new Country(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Country from database
	 * @static
	 * @async
	 * @returns {Object<Type>} One Country in database
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query("SELECT * FROM country WHERE id=$1", [
				id,
			]);
			return rows[0] ? new Country(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
