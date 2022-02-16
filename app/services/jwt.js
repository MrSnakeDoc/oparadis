const jwt = require("jsonwebtoken");

const { jwt_secret, refresh_jwt_secret } = require("../config");

module.exports = {
	makeToken(user) {
		try {
			// Creation of a token
			// algoritm : type of encryption
			// expiresIn : period of validity
			// Method jwt : this method requires two parameters an object and a key
			//return token
			return jwt.sign({ data: user }, jwt_secret, {
				algorithm: "HS256",
				expiresIn: "5m",
			});
		} catch (error) {
			throw error;
		}
	},
	validateToken(token) {
		try {
			// Checks the validity of the token return an object with the data stored in the jwt
			return jwt.verify(token, jwt_secret, { algorithm: "HS256" });
		} catch (error) {
			throw error;
		}
	},

	generateRefreshToken(user) {
		try {
			// Creation of a new token return token
			return jwt.sign({ data: user }, refresh_jwt_secret, {
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
