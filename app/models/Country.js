const CoreModel = require("./CoreModel");

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
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM country");
			return results.map((result) => new Country(result));
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Country from database
	 * @static
	 * @async
	 * @returns {Object<Type>} One Country in database
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const result = await CoreModel.getRow("SELECT * FROM country WHERE id=$1", [
				id,
			]);
			return result ? new Country(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw error;
		}
	}
};
