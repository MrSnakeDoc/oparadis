const { House, BaseError } = require("../models");

module.exports = {
	async findAllFull(_, res) {
		try {
			const houses = await House.findAllFull();
			res.json(houses);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async findFour(_, res) {
		try {
			const houses = await House.findFour();
			res.json(houses);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async findOneFull(req, res) {
		try {
			const house = await House.findOneFull(+req.params.id);
			!house.id ? res.status(404).json("Not found") : res.json(house);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async findAll(_, res) {
		try {
			const house = await House.findAll();
			res.json(house);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async findOne(req, res) {
		try {
			const house = await House.findOne(+req.params.id);
			!house.id ? res.status(404).json("Not found") : res.json(house);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async save(req, res) {
		try {
			const house = await new House(req.body).save();
			res.status(201).json(house);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async update(req, res) {
		try {
			const house = await new House({
				id: +req.params.id,
				...req.body,
			}).update();
			!house.id ? res.status(404).json("Not found") : res.json(house);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async delete(req, res) {
		try {
			await House.delete(+req.params.id);
			res.sendStatus(204);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
};
