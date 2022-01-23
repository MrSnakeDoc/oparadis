const jwt = require("jsonwebtoken");

const { jwt_secret, refresh_jwt_secret } = require("../config");

module.exports = {
	makeToken(id) {
		try {
			return jwt.sign({ data: id }, jwt_secret, {
				algorithm: "HS256",
				expiresIn: "120s",
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

	generateRefreshToken(id) {
		try {
			return jwt.sign({ data: id }, refresh_jwt_secret, {
				algorithm: "HS256",
				expiresIn: "7200s",
			});
		} catch (error) {
			throw error;
		}
	},
	validateRefreshedToken(token) {
		try {
			return jwt.verify(token, refresh_jwt_secret, { algorithm: "HS256" });
		} catch (error) {
			throw error;
		}
	},
};
