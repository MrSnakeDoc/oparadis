const CoreModel = require("./CoreModel");

/**
 * @typedef {Object} Animal
 * @property {number} id
 * @property {string} photo
 */
module.exports = class Photo {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Photos from database
	 * @static
	 * @async
	 * @returns {Array<Photo>} All Photos in database
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM photo");
			return results.map((result) => new Photo(result));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Photo from database
	 * @static
	 * @async
	 * @returns {Object<Photo>} One Photo in database
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const result = await CoreModel.getRow("SELECT * FROM photo WHERE id=$1", [
				id,
			]);
			return result ? new Photo(result) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new Photo in database
	 * @async
	 * @returns {Object<Photo>} Creates a new Photo in database
	 * @throw {Error} An error
	 */
	async save() {
		try {
			// We select the add function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_photo($1)", [
				this,
			]);
			return result ? new Photo(result) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Photo in database
	 * @async
	 * @returns {Object<Photo>} Updates a Photo in database
	 * @throw {Error} An error
	 */
	async update() {
		try {
			// We select the update function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM update_photo($1)", [
				this,
			]);
			return result ? new Photo(result) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a Photo in database
	 * @async
	 * @returns {Object<Photo>} Delete a Photo in database
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from photo where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
