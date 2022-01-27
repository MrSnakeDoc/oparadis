const { send } = require("express/lib/response");
const CoreModel = require("./CoreModel");

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
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM absentee");
			return results.map((result) => new Absentee(result));
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
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const results = await CoreModel.getRow(
				"SELECT * FROM absentee WHERE id=$1",
				[id]
			);
			return results ? new Absentee(results) : undefined;
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
	 * @throw {Error} An error
	 */
	async save() {
		try {
			// We select the add function create a database(example function in migrations/deploy/function)
			const results = await CoreModel.getRow("SELECT * FROM add_absentee($1)", [
				this,
			]);
			return results ? new Absentee(results) : undefined;
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
	 * @throw {Error} An error
	 */
	async update() {
		try {
			// We select the update function create a database(example function in migrations/deploy/function)
			const results = await CoreModel.getRow("SELECT * FROM update_absentee($1)", [
				this,
			]);
			return results ? new Absentee(results) : undefined;
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
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from absentee where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};