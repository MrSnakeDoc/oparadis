const CoreModel = require("./CoreModel");

/**
 * @typedef {Object} Customer
 * @property {number} id
 * @property {string} email
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} pseudo
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
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM customer");
			return results.map((result) => new Customer(result));
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
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const results = await CoreModel.getRow(
				"SELECT * FROM customer where id = $1",
				[id]
			);
			return results ? new Customer(results) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	static async authFindOne(email) {
		try {
			const results = await CoreModel.getRow(
				"SELECT * FROM customer where email = $1",
				[email]
			);
			return results ? new Customer(results) : undefined;
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
	 * @throw {Error} An error
	 */
	async save() {
		try {
			const result = await CoreModel.getRow("SELECT * FROM add_customer($1)", [
				this,
			]);
			return result ? new Customer(result) : undefined;
		} catch (error) {
			if (error.detail) {
				console.log(error);
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	/**
	 * Updates a Customer in database
	 * @async
	 * @returns {Object<Customer>} Updates a Customer in database
	 * @throw {Error} An error
	 */
	async update() {
		try {
			const result = await CoreModel.getRow(
				"SELECT * FROM update_customer($1)",
				[this]
			);
			return result ? new Customer(result) : undefined;
		} catch (error) {
			console.log(error);
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
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from customer where id = $1", [id]);
			return;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
