const { port } = require("../config/");
const jwt = require("../services/jwt");

module.exports = (req, res, next) => {
	try {
		if (
			req.headers.host === "localhost:5000" ||
			req.headers.host === "oparadisapi.herokuapp.com"
		) {
			next();
		} else {
			const token =
				req.headers.authorization && req.headers.authorization.split(" ")[1];
			if (!token) {
				return res.sendStatus(401);
			}
			const payload = jwt.validateToken(token);
			if (!payload.data) {
				return res.sendStatus(403);
			}
			req.userId = payload.data;
			next();
		}
	} catch (error) {
		console.log(error);
		res.status(401).json(error);
	}
};
