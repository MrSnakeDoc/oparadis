const { Country, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const countries = await Country.findAll();
			res.json(countries);
		} catch (err) {
			res.status(404).json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const country = await Country.findOne(+req.params.id);
			res.json(country);
		} catch (err) {
			res.status(404).json(new BaseError(err));
		}
	},
};
