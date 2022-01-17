const { Animal, BaseError } = require("../models");

module.exports = {
    async findAll(_, res) {
        try {
            const animal =  await Animal.findAll();
            res.json(animal);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },

    async findOne(req, res) {
        try {
            const animal =  await new Animal.findOne(+req.params.id);
            res.json(animal);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },

    async save(req, res) {
        try {
            const animal =  await Animal(req.body).save();
            res.json(animal);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },
    async update(req, res) {
        try {
            const animal = await new Animal(req.body).update();
            res.json(animal);
        } catch (err) {
			res.json(new BaseError(err));
        } 
    },
    async delete(req, res) {
        try {
            await animal.delete(+req.parmas.id);
            res.json("Animal Deleted");
        } catch (err) {
			res.json(new BaseError(err));
        } 
    }
}