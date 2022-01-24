const { Photo, BaseError } = require("../models");

module.exports = {
	async findAll(_, res) {
		try {
			const photo = await Photo.findAll();
			res.json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async findOne(req, res) {
		try {
			const photo = await Photo.findOne(+req.params.id);
			if(!photo.id) res.status(204);
			res.json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},

	async save(req, res) {
		try {
			const photo = await new Photo(req.body).save();
			res.status(201).json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			const photo = await new Photo({
				id: +req.params.id,
				...req.body,
			}).update();
			res.json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await Photo.delete(+req.params.id);
			res.json("Photo Deleted");
		} catch (err) {
			res.status(500).json(new BaseError(err));
		}
	},
};
