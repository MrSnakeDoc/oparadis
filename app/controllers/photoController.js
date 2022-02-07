const { Photo, BaseError } = require("../models");
const { cloudCreate, cloudDelete } = require('../services/cloud');

module.exports = {
	async findAll(_, res) {
		try {
			const photo = await Photo.findAll();
			res.json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async findOne(req, res) {
		try {
			const photo = await Photo.findOne(+req.params.id);
			!photo.id ? res.status(404).json('Not found') : res.json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async save(req, res) {
		try {
			req.body.photo = await cloudCreate(req.body.photo);
			const photo = await new Photo(req.body).save();
			res.status(201).json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async update(req, res) {
		try {
			if(req.body.photo){
				// Delete old image
				const photo = await Photo.findOne(+req.params.id);				
				await cloudDelete(photo.photo);
				// Create new image
				req.body.photo = await cloudCreate(req.body.photo);
			};
			const photo = await new Photo({
				id: +req.params.id,
				...req.body,
			}).update();
			!photo.id ? res.status(404).json('Not found') : res.json(photo);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async delete(req, res) {
		try {
			const photo = await Photo.findOne(+req.params.id);
			await cloudDelete(photo.photo);
			await Photo.delete(+req.params.id);
			res.sendStatus(204);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
};
