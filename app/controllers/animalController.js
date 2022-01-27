const { Animal, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const animal = await Animal.findAll();
			res.json(animal);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const animal = await Animal.findOne(+req.params.id);
			if(!animal) res.status(204);
			res.json(animal);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const animal = await new Animal(req.body).save();
			res.status(201).json(animal);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			const animal = await new Animal({
				id: +req.params.id,
				...req.body,
			}).update();
			if (!animal.id) res.status(204);
			res.json(animal);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await Animal.delete(+req.params.id);
			res.json("Animal Deleted");
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
};
