const jwt = require("jsonwebtoken");

const { jwt_secret, refresh_jwt_secret } = require("../config");

module.exports = {
	makeToken(id) {
		try {
			// Creation of a token
			return jwt.sign({ data: id }, jwt_secret, {
				algorithm: "HS256",
				expiresIn: "30s",
			});
		} catch (error) {
			throw error;
		}
	},
	validateToken(token) {
		try {
			// Checks the validity of the token
			return jwt.verify(token, jwt_secret, { algorithm: "HS256" });
		} catch (error) {
			throw error;
		}
	},

	generateRefreshToken(id) {
		try {
			// Creation of a new token
			return jwt.sign({ data: id }, refresh_jwt_secret, {
				algorithm: "HS256",
				expiresIn: "3600s",
			});
		} catch (error) {
			throw error;
		}
	},
	validateRefreshedToken(token) {
		try {
			// Checks the validity of the token
			return jwt.verify(token, refresh_jwt_secret, { algorithm: "HS256" });
		} catch (error) {
			throw error;
		}
	},
};
