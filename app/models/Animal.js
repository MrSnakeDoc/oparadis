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
module.exports = class Animal {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Animals from database
	 * @static
	 * @async
	 * @returns {Array<Animal>} All Animals in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM animal");
			return rows.map((row) => new Animal(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Animal from database
	 * @static
	 * @async
	 * @returns {Object<Animal>} One Animal in database
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query(
				"SELECT * FROM animal WHERE post.id=$1",
				[id]
			);
			return rows[0] ? new Animal(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new Animal in database
	 * @async
	 * @returns {Object<Animal>} Creates a new Animal in database
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_animal($1)", [
				this,
			]);
			return rows[0] ? new Animal(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Animal in database
	 * @async
	 * @returns {Object<Animal>} Updates a Animal in database
	 * @throws {Error} An error
	 */
	async update() {
		try {
			const { rows } = await client.query("SELECT * FROM update_animal($1)", [
				this,
			]);
			return rows[0] ? new Animal(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a Animal in database
	 * @async
	 * @returns {Object<Animal>} Delete a Animal in database
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from animal where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
