const { House, BaseError } = require("../models");

module.exports = {
	async findAllFull(_, res) {
		try {
			const houses = await House.findAllFull();
			res.json(houses);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async findOneFull(req, res) {
		try {
			const house = await House.findOneFull(+req.params.id);
			res.json(house);
		} catch (err) {
			res.status().json(new BaseError(err));
		}
	},

	async findAll(_, res) {
		try {
			const house = await House.findAll();
			res.json(house);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const house = await House.findOne(+req.params.id);
			res.json(house);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const house = await new House(req.body).save();
			res.json(house);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			const house = await new House({
				id: +req.params.id,
				...req.body,
			}).update();
			res.json(house);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await House.delete(+req.params.id);
			res.json("House Deleted");
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
};
