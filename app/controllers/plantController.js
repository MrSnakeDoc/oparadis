const { Plant, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const plant = await Plant.findAll();
			res.json(plant);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const plant = await Plant.findOne(+req.params.id);
			res.json(plant);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const plant = await new Plant({ id: +req.params.id, ...req.body }).save();
			res.json(plant);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			const plant = await new Plant({
				id: +req.params.id,
				...req.body,
			}).update();
			res.json(plant);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await Plant.delete(+req.parmas.id);
			res.json("Plant Deleted");
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
};
