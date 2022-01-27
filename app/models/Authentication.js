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
	 * @returns {Array<Customer>} All Customers in database
	 * @throw {Error} An error
	 */
	static async isAdmin() {
		try {
			const results = await CoreModel.getArray(
				"SELECT id, isAdmin FROM customer"
			);
			return results ? new Authentication(results) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	async update_isAdmin() {
		try {
			const results = await CoreModel.getRow("SELECT * FROM update_isAdmin", [
				this,
			]);
			return results ? new Authentication(results) : undefined;
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
			return results ? new Authentication(results) : undefined;
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
	async signup() {
		try {
			// We select the add function create a database(example function in sqitch/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_customer($1)", [
				this,
			]);
			return result ? new Authentication(result) : undefined;
		} catch (error) {
			if (error.detail) {
				console.log(error);
				throw new Error(error.detail);
			}
			throw error;
		}
	}

	async update_password() {
		try {
			// We select the update function create a database(example function in sqitch/deploy/function)
			const result = await CoreModel.getRow(
				"SELECT * FROM update_password($1)",
				[this]
			);
			return result ? new Authentication(result) : undefined;
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
};
