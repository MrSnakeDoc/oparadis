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
module.exports = class Type {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Types from database
	 * @static
	 * @async
	 * @returns {Array<Type>} All Types in database
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM house_type");
			return results.map((result) => new Type(result));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Type from database
	 * @static
	 * @async
	 * @returns {Object<Type>} One Type in database
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const result = await CoreModel.getRow(
				"SELECT * FROM house_type WHERE id=$1",
				[id]
			);
			return result ? new Type(result) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new Type in database
	 * @async
	 * @returns {Object<Type>} Creates a new Type in database
	 * @throw {Error} An error
	 */
	async save() {
		try {
			const result = await CoreModel.getRow("SELECT * FROM add_type($1)", [this]);
			return result ? new Type(result) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Type in database
	 * @async
	 * @returns {Object<Type>} Updates a Type in database
	 * @throw {Error} An error
	 */
	async update() {
		try {
			const result = await CoreModel.getRow("SELECT * FROM update_type($1)", [
				this,
			]);
			return result ? new Type(result) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a Type in database
	 * @async
	 * @returns {Object<Type>} Delete a Type in database
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from house_type where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
