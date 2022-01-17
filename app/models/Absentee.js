const client = require("../database.js");

/**
 * @typedef {Object} Absentee
 * @property {number} id
 * @property {string} starting_date
 * @property {string} ending_date
 */
module.exports = class Absentee {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Absentees from database
	 * @static
	 * @async
	 * @returns {Array<Absentee>} All Absentees in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM absentee");
			return rows.map((row) => new Absentee(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Absentee from database
	 * @static
	 * @async
	 * @returns {Object<Absentee>} One Absentee in database
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query(
				"SELECT * FROM absentee WHERE post.id=$1",
				[id]
			);
			return rows[0] ? new Absentee(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new Absentee in database
	 * @async
	 * @returns {Object<Absentee>} Creates a new Absentee in database
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_absentee($1)", [
				this,
			]);
			return rows[0] ? new Absentee(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Absentee in database
	 * @async
	 * @returns {Object<Absentee>} Updates a Absentee in database
	 * @throws {Error} An error
	 */
	async update() {
		try {
			const { rows } = await client.query("SELECT * FROM update_absentee($1)", [
				this,
			]);
			return rows[0] ? new Absentee(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a Absentee in database
	 * @async
	 * @returns {Object<Absentee>} Delete a Absentee in database
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from absentee where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};