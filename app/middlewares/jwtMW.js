const jwt = require("../services/jwt");
module.exports = (req, res, next) => {
	try {
		let token = req.headers.authorization;
		token = token.replace(/^Bearer\s+/, "");
		if (!token) {
			res.status(401).json("unauthorized");
		}
		const payload = jwt.validateToken(token);
		if (!payload.data) {
			res.status(401).json("unauthorized");
		}
		req.userId = payload.userId;
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json(error);
	}
};
