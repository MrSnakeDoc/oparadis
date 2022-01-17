const { Photo, BaseError } = require("../models");

module.exports = {
    async findAll(_, res) {
        try {
            const photo =  await Photo.findAll();
            res.json(photo);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },

    async findOne(req, res) {
        try {
            const photo =  await new Photo.findOne(+req.params.id);
            res.json(photo);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },

    async save(req, res) {
        try {
            const photo =  await Photo(req.body).save();
            res.json(photo);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },
    async update(req, res) {
        try {
            const photo = await new Photo(req.body).update();
            res.json(photo);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },
    async delete(req, res) {
        try {
            await Photo.delete(+req.parmas.id);
            res.json("Photo Deleted");
        } catch (err) {
			res.json(new BaseError(err));
        } 
    }
}