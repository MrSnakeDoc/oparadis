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
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM type");
			return rows.map((row) => new Type(row));
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
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query("SELECT * FROM type WHERE id=$1", [
				id,
			]);
			return rows[0] ? new Type(rows) : undefined;
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
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_type($1)", [this]);
			return rows[0] ? new Type(rows) : undefined;
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
	 * @throws {Error} An error
	 */
	async update() {
		try {
			const { rows } = await client.query("SELECT * FROM update_type($1)", [
				this,
			]);
			return rows[0] ? new Type(rows) : undefined;
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
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from type where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
