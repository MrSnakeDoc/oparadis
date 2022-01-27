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

	async findOneFull(req, res) {
		try {
			const house = await House.findOneFull(+req.params.id);
			if(!house.id) res.status(204);
			res.json(house);
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
			if(!house.id) res.status(204);
			res.json(house);
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
			if (!house.id) res.status(204);
			res.json(house);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async delete(req, res) {
		try {
			await House.delete(+req.params.id);
			res.json("House Deleted");
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
};
