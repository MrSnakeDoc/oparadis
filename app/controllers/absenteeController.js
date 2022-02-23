const { Absentee, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const absentee = await Absentee.findAll();
			res.json(absentee);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async findOne(req, res) {
		try {
			const absentee = await Absentee.findOne(+req.params.id);
			!absentee.id ? res.status(404).json("Not found") : res.json(absentee);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async save(req, res) {
		try {
			const absentee = await new Absentee(req.body).save();
			res.status(201).json(absentee);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async update(req, res) {
		try {
			const absentee = await new Absentee({
				id: +req.params.id,
				...req.body,
			}).update();
			!absentee.id ? res.status(404).json("Not found") : res.json(absentee);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async delete(req, res) {
		try {
			await Absentee.delete(+req.params.id);
			res.sendStatus(204);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
};
