const { House, BaseError } = require("../models");

module.exports = {
    async findAll(_, res) {
        try {
            const house =  await House.findAll();
            res.json(house);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },

    async findOne(req, res) {
        try {
            const house =  await new House.findOne(+req.params.id);
            res.json(house);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },

    async save(req, res) {
        try {
            const house =  await House(req.body).save();
            res.json(house);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },
    async update(req, res) {
        try {
            const house = await new House(req.body).update();
            res.json(house);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },
    async delete(req, res) {
        try {
            await House.delete(+req.parmas.id);
            res.json("Photo Deleted");
        } catch (err) {
			res.json(new BaseError(err));
        } 
    }
}