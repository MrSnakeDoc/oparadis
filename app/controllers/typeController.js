const { Type, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const types = await Type.findAll();
			res.json(types);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const type = await Type.findOne(+req.params.id);
			res.json(type);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const type = await new Type({
				id: +req.params.id,
				...req.body,
			}).save();
			res.json(type);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async update(req, res) {
		try {
			const type = await new Type({
				id: +req.params.id,
				...req.body,
			}).update();
			res.json(type);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async delete(req, res) {
		try {
			const message = await Type.delete(+req.params.id);
			res.json(message);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
};
