const CoreModel = require("./CoreModel");

/**
 * @typedef {Object} Customer
 * @property {number} id
 * @property {string} email
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} pseudo
 * @property {string} phone_number
 * @property {string} avatar
 * @property {boolean} isAdmin
 * @property {date} created_at
 * @property {date} updated_at
 */
module.exports = class Authentication {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} returns the value isAdmin of the user with the given id
	 * @throw {err} An err
	 */
	static async isAdmin(id) {
		try {
			const results = await CoreModel.getArray(
				"SELECT id, isAdmin FROM customer where id = $1",
				[id]
			);
			return results ? new Authentication(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} Update the value isAdmin of the customer with the given id
	 * @throw {err} An err
	 */
	async update_isAdmin() {
		try {
			const results = await CoreModel.getRow("SELECT * FROM update_isAdmin", [
				this,
			]);
			return results ? new Authentication(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} Returns the customer with the given email for authentication
	 * @throw {err} An err
	 */
	static async authFindOne(email) {
		try {
			const results = await CoreModel.getRow(
				"SELECT * FROM customer_all_id where email = $1",
				[email]
			);
			return results ? new Authentication(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Creates a new Customer in database
	 * @async
	 * @returns {Object<Customer>} Creates a new Customer in database
	 * @throw {err} An err
	 */
	async signup() {
		try {
			// We select the add function create a database(example function in sqitch/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_customer($1)", [
				this,
			]);
			return result ? new Authentication(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} Returns the password of the customer with given id to compare it(jwt)
	 * @throw {err} An err
	 */
	static async getPassword(id) {
		try {
			const result = await CoreModel.getRow(
				"SELECT password FROM customer WHERE id = $1",
				[id]
			);
			return result ? new Authentication(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} Updates the password of the customer with the given id
	 * @throw {err} An err
	 */
	async update_password() {
		try {
			// We select the update function create a database(example function in sqitch/deploy/function)
			const result = await CoreModel.getRow(
				"SELECT * FROM update_password($1)",
				[this]
			);
			return result ? new Authentication(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
};
