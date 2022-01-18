const client = require("../database.js");

/**
 * @typedef {Object} Customer
 * @property {number} id
 * @property {string} email
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} phone_number
 * @property {string} photo
 */
module.exports = class Customer {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Array<Customer>} All Customers in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		try {
			const { rows } = await client.query("SELECT * FROM customer");
			return rows.map((row) => new Customer(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Retrieves one Customer from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} One Customer in database
	 * @throws {Error} An error
	 */
	static async findOne(id) {
		try {
			const { rows } = await client.query(
				"SELECT * FROM customer where id = $1",
				[id]
			);
			return rows[0] ? new Customer(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Creates a new Customer in database
	 * @async
	 * @returns {Object<Customer>} Creates a new Customer in database
	 * @throws {Error} An error
	 */
	async save() {
		try {
			const { rows } = await client.query("SELECT * FROM add_customer($1)", [
				this,
			]);
			return rows[0] ? new Customer(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Customer in database
	 * @async
	 * @returns {Object<Customer>} Updates a Customer in database
	 * @throws {Error} An error
	 */
	async update() {
		try {
			const { rows } = await client.query("SELECT * FROM update_customer($1)", [
				this,
			]);
			return rows[0] ? new Customer(rows) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	/**
	 * Delete a Customer in database
	 * @async
	 * @returns {String} Delete a Customer in database
	 * @throws {Error} An error
	 */
	static async delete(id) {
		try {
			await client.query("delete from customer where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
