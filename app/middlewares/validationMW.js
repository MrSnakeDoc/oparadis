module.exports = {
	validateBody: (schema) => (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) {
			res.status(400).json(error.message);
		} else {
			next();
		}
	},

	validateQuery: (schema) => (req, res, next) => {
		const { error } = schema.validate(req.query);
		if (error) {
			res.status(400).json(error.message);
		} else {
			next();
		}
	},

	validateParams: (schema) => (req, res, next) => {
		const { error } = schema.validate(req.params);
		if (error) {
			res.status(400).json(error.message);
		} else {
			next();
		}
	},
};
