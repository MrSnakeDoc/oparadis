const jwt = require("../services/jwt");
module.exports = (req, res, next) => {
	try {
		const token =
			req.headers.authorization && req.headers.authorization.split(" ")[1];
		if (!token) {
			res.sentStatus(401);
		}
		const payload = jwt.validateToken(token);
		if (!payload.data) {
			res.sendStatus(403);
		}
		req.userId = payload.userId;
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json(error);
	}
};
