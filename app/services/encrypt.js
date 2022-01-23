const bcrypt = require("bcrypt");
const { salt } = require("../config");
module.exports = {
	async encrypt(password) {
		return await bcrypt.hash(password, salt);
	},
};
