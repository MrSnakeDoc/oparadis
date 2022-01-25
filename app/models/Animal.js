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
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM animal");
			return results.map((result) => new Animal(result));
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
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const result = await CoreModel.getRow(
				
				"SELECT * FROM animal WHERE id=$1",
				[id]
			);
			return result ? new Animal(result) : undefined;
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
	 * @throw {Error} An error
	 */
	async save() {
		try {
			// We select the add function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_animal($1)", [
				this,
			]);
			return result ? new Animal(result) : undefined;
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
	 * @throw {Error} An error
	 */
	async update() {
		try {
			// We select the update function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM update_animal($1)", [
				this,
			]);
			return result ? new Animal(result) : undefined;
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
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from animal where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
