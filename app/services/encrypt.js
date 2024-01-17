const bcrypt = require("bcrypt");
const { salt } = require("../config");

// Use of  Bcrypt to hash password and compare password
module.exports = {
	async encrypt(password) {
		try {
			return await bcrypt.hash(password, salt);
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
	async compare(password, hash) {
		return await bcrypt.compare(password, hash);
	},
};
