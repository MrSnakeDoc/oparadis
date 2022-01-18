const client = require("../database.js");

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
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM photo");
			return rows.map((row) => new Photo(row));
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
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query("SELECT * FROM photo WHERE id=$1", [
				id,
			]);
			return rows[0] ? new Photo(rows) : undefined;
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
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_photo($1)", [
				this,
			]);
			return rows[0] ? new Photo(rows) : undefined;
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
	 * @throws {Error} An error
	 */
	async update() {
		try {
			const { rows } = await client.query("SELECT * FROM update_photo($1)", [
				this,
			]);
			return rows[0] ? new Photo(rows) : undefined;
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
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from photo where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
