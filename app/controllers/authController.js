const bcrypt = require("bcrypt");
const { Customer, BaseError } = require("../models");
const { makeToken, generateRefreshToken } = require("../services/jwt");
const { cache, verifyToken, deleteToken } = require("../services/tokenCache");
const { validateRefreshedToken } = require("../services/jwt");

module.exports = {
	async signin(req, res) {
		try {
			const { email, password } = req.body;
			const customer = await Customer.authFindOne(email);
			if (!customer) {
				throw new Error({
					message: "Invalid credentials",
					code: 401,
				});
			}
			const verifiedPassword = await bcrypt.compare(
				password,
				customer.password
			);
			if (!verifiedPassword) {
				throw new Error({
					message: "Invalid credentials",
					code: 401,
				});
			}
			const token = {
				access_token: `Bearer ${makeToken(customer.id)}`,
				refresh_token: `Bearer ${generateRefreshToken(customer.id)}`,
			};
			cache(customer.id, token.refresh_token.split(" ")[1]);
			res.status(200).json(token);
		} catch (error) {
			if (error.detail) {
				throw new BaseError(error.detail);
			}
			throw error;
		}
	},

	async refreshToken(req, res) {
		try {
			const token =
				req.headers.authorization && req.headers.authorization.split(" ")[1];
			if (!token) {
				return res.sendStatus(401);
			}
			const payload = validateRefreshedToken(token);
			if (!payload.data) {
				return res.sendStatus(403);
			}
			const verifiedToken = await verifyToken(payload.data, token);
			if (!verifiedToken) {
				return res.sendStatus(401);
			}
			res.json({ access_token: makeToken(payload.data) });
		} catch (error) {
			if (error.message === "invalid token") {
				return res.sendStatus(401);
			}
			return res.json(error.message);
		}
	},
	async disconnect(req, res) {
		try {
			const token =
				req.headers.authorization && req.headers.authorization.split(" ")[1];
			if (!token) {
				return res.sendStatus(401);
			}
			const payload = validateRefreshedToken(token);
			if (!payload.data) {
				return res.sendStatus(403);
			}
			const verifiedToken = await verifyToken(payload.data, token);
			if (!verifiedToken) {
				return res.sendStatus(401);
			}
			const deleted = await deleteToken(payload.data);
			if (!deleted) {
				return res.sendStatus(500);
			}
			res.sendStatus(204);
		} catch (error) {
			if (error.message === "invalid token") {
				return res.sendStatus(401);
			}
			return res.json(error.message);
		}
	},
};
