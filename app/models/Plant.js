const CoreModel = require("./CoreModel");

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
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM plant");
			return results.map((result) => new Plant(result));
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves one Plant from database
	 * @static
	 * @async
	 * @returns {Object<Plant>} One Plant in database
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const result = await CoreModel.getRow(
				"SELECT * FROM plant WHERE id=$1",
				[id]
			);
			return result ? new Plant(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Creates a new Plant in database
	 * @async
	 * @returns {Object<Plant>} Creates a new Plant in database
	 * @throw {Error} An error
	 */
	async save() {
		try {
			// We select the add function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_plant($1)", [
				this,
			]);
			return result ? new Plant(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Updates a Plant in database
	 * @async
	 * @returns {Object<Plant>} Updates a Plant in database
	 * @throw {Error} An error
	 */
	async update() {
		try {
			// We select the update function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM update_plant($1)", [
				this,
			]);
			return result ? new Plant(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
	/**
	 * Delete a Plant in database
	 * @async
	 * @returns {Object<Plant>} Delete a Plant in database
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from plant where id = $1", [id]);
			return;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
};