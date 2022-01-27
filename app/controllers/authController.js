const bcrypt = require("bcrypt");
const { Authentication, BaseError } = require("../models");
const {
	makeToken,
	generateRefreshToken,
	validateRefreshedToken,
} = require("../services/jwt");
const { cache, verifyToken, deleteToken } = require("../services/tokenCache");
const { encrypt } = require("../services/encrypt");

module.exports = {
	async signup(req, res) {
		try {
			// delete field repeat_password
			delete req.body.repeat_password;
			// encrypt the password
			req.body.password = await encrypt(req.body.password);
			const customer = await new Authentication(req.body).signup();
			delete customer.password;
			res.status(201).json(customer);
		} catch (err) {
			console.log(err);
			res.status(500).json(new BaseError(err));
		}
	},

	async signin(req, res) {
		try {
			// we retrieve the email to verify that it
			// exists and we verify the password
			const { email, password } = req.body;
			const customer = await Authentication.authFindOne(email);
			if (!customer) {
				return res.sendStatus(401);
			}
			const verifiedPassword = await bcrypt.compare(
				password,
				customer.password
			);
			if (verifiedPassword === false) {
				return res.sendStatus(401);
			}
			// We create a token with a short validity
			// and a token(refresh) with a long validity
			// then a store the token(refresh) and the
			// associated id to be able to check it
			const token = {
				access_token: `Bearer ${makeToken(customer.id)}`,
				refresh_token: `Bearer ${generateRefreshToken(customer.id)}`,
			};
			cache(customer.id, token.refresh_token.split(" ")[1]);
			res.status(200).json(token);
		} catch (error) {
			res.status(500).json(error);
		}
	},

	async refreshToken(req, res) {
		try {
			const token =
				req.headers.authorization && req.headers.authorization.split(" ")[1];
			// checks that the token has the authorization
			if (!token) {
				return res.sendStatus(401);
			}
			// Checks the validity of the token
			const payload = validateRefreshedToken(token);
			if (!payload.data) {
				return res.sendStatus(403);
			}
			// Checks that the token exists in redis
			const verifiedToken = await verifyToken(payload.data, token);
			if (!verifiedToken) {
				return res.sendStatus(401);
			}
			//Make a token
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

	async isAdmin(req, res) {
		try {
			// We check if the customer is admin
			const customer = await Authentication.isAdmin(+req.params.id);
			if (!customer.id) res.status(204);
			res.json(customer);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async update_isAdmin(req, res) {
		try {
			// Change the value of isAdmin of the customer
			const customer = await Authentication({
				id: +req.params.id,
				...req.body,
			}).update_isAdmin();
			res.json(customer);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
	async update_password(req, res) {
		try {
			delete req.body.repeat_password;
			req.body.password = await encrypt(req.body.password);
			// We pass the id in the object to update a
			const customer = await new Authentication({
				id: +req.params.id,
				...req.body,
			}).update_password();
			if (!customer) throw new Error({ code: 204 });
			return res.sendStatus(200);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
};
