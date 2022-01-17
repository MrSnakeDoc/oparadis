const jwt = require("jsonwebtoken");

const { jwt_secret } = require("../config");

module.exports = {
	makeToken(id) {
		try {
			return jwt.sign({ data: id }, jwt_secret, {
				algorithm: "HS256",
				expiresIn: "1h",
			});
		} catch (error) {
			throw error;
		}
	},
	validateToken(token) {
		try {
			return jwt.verify(token, jwt_secret, { algorithm: "HS256" });
		} catch (error) {
			throw error;
		}
	},
};
