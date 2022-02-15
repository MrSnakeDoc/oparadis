const CoreModel = require("./CoreModel");

/**
 * @typedef {Object} Type
 * @property {number} id
 * @property {string} type
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
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
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
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
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
			// We select the add function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_type($1)", [
				this,
			]);
			return result ? new Type(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
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
			// We select the update function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM update_type($1)", [
				this,
			]);
			return result ? new Type(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
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
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
};
