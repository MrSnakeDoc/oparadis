const client = require("../database.js");

/**
 * @typedef {Object} Plant
 * @property {number} id
 * @property {string} type
 * @property {string} notes
 * @property {string} photo
 */
module.exports = class Plant {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Plants from database
	 * @static
	 * @async
	 * @returns {Array<Plant>} All Plants in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM plant");
			return rows.map((row) => new Plant(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Plant from database
	 * @static
	 * @async
	 * @returns {Object<Plant>} One Plant in database
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query(
				"SELECT * FROM plant WHERE id=$1",
				[id]
			);
			return rows[0] ? new Plant(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new Plant in database
	 * @async
	 * @returns {Object<Plant>} Creates a new Plant in database
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_plant($1)", [
				this,
			]);
			return rows[0] ? new Plant(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Plant in database
	 * @async
	 * @returns {Object<Plant>} Updates a Plant in database
	 * @throws {Error} An error
	 */
	async update() {
		try {
			const { rows } = await client.query("SELECT * FROM update_plant($1)", [
				this,
			]);
			return rows[0] ? new Plant(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a Plant in database
	 * @async
	 * @returns {Object<Plant>} Delete a Plant in database
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from plant where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};