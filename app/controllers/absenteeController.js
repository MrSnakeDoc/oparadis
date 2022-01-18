const { Absentee, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const absentee = await Absentee.findAll();
			res.json(absentee);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const absentee = await Absentee.findOne(+req.params.id);
			res.json(absentee);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const absentee = await new Absentee({
				id: +req.params.id,
				...req.body,
			}).save();
			res.json(absentee);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			const absentee = await new Absentee({
				id: +req.params.id,
				...req.body,
			}).update();
			res.json(absentee);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await absentee.delete(+req.parmas.id);
			res.json("Absentee Deleted");
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
};
