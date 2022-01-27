const { Plant, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const plant = await Plant.findAll();
			res.json(plant);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const plant = await Plant.findOne(+req.params.id);
			if(!plant) res.status(204);
			res.json(plant);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const plant = await new Plant(req.body).save();
			res.status(201).json(plant);
		} catch (err) {
			console.log(err);
			res.status(500).json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			const plant = await new Plant({
				id: +req.params.id,
				...req.body,
			}).update();
			if (!plant.id) res.status(204);
			res.json(plant);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await Plant.delete(+req.params.id);
			res.json("Plant Deleted");
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
};
