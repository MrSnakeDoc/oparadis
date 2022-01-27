const { Country, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const countries = await Country.findAll();
			res.json(countries);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async findOne(req, res) {
		try {
			const country = await Country.findOne(+req.params.id);
			if(!country) res.status(204);
			res.json(country);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
};
