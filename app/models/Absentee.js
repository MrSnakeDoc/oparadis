const CoreModel = require("./CoreModel");

/**
 * @typedef {Object} Absentee
 * @property {number} id
 * @property {string} starting_date
 * @property {string} ending_date
 * @property {number} customer_id
 * @property {number} home_sitter
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
	 * @throw {err} An err
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM absentee");
			return results.map((result) => new Absentee(result));
		} catch (err) {
			if (err.detail) {
				throw new err(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves one Absentee from database
	 * @static
	 * @async
	 * @returns {Object<Absentee>} One Absentee in database
	 * @throw {err} An err
	 */
	static async findOne(id) {
		try {
			const results = await CoreModel.getRow(
				"SELECT * FROM absentee WHERE id=$1",
				[id]
			);
			return results ? new Absentee(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new err(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Creates a new Absentee in database
	 * @async
	 * @returns {Object<Absentee>} Creates a new Absentee in database
	 * @throw {err} An err
	 */
	async save() {
		try {
			// We select the add function create a database(example function in migrations/deploy/function)
			const results = await CoreModel.getRow("SELECT * FROM add_absentee($1)", [
				this,
			]);
			return results ? new Absentee(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new err(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Updates a Absentee in database
	 * @async
	 * @returns {Object<Absentee>} Updates a Absentee in database
	 * @throw {err} An err
	 */
	async update() {
		try {
			// We select the update function create a database(example function in migrations/deploy/function)
			const results = await CoreModel.getRow(
				"SELECT * FROM update_absentee($1)",
				[this]
			);
			return results ? new Absentee(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new err(err.detail);
			}
			throw err;
		}
	}
	/**
	 * Delete a Absentee in database
	 * @async
	 * @returns {null} Delete an Absentee in database
	 * @throw {err} An err
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from absentee where id = $1", [id]);
			return;
		} catch (err) {
			if (err.detail) {
				throw new err(err.detail);
			}
			throw err;
		}
	}
};
