const { Absentee, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const absentee = await Absentee.findAll();
			res.json(absentee);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const absentee = await Absentee.findOne(+req.params.id);
			if(!absentee.id) res.status(204);
			res.json(absentee);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const absentee = await new Absentee(req.body).save();
			res.status(201).json(absentee);
		} catch (err) {
			res.status(500).json(new BaseError(err));
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
			res.status(500).json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await Absentee.delete(+req.params.id);
			res.json("Absentee Deleted");
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
};
