const { Customer, BaseError } = require("../models");
const { cloud } = require('../services/cloud');

module.exports = {
	async findAll(_, res) {
		try {
			const customers = await Customer.findAll();
			res.json(customers);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
	async findOne(req, res) {
		try {
			const customer = await Customer.findOne(+req.params.id);
			// If customer not exist so return status 204 (No Content)
			!customer.id ? res.status(404).json('Not found') : res.json(customer);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async update(req, res) {
		try {
			if (req.body.pseudo === "") delete req.body.pseudo;
			// We pass the id in the object to update a
			const customer = await new Customer({
				id: +req.params.id,
				...req.body,
			}).update();
			!customer.id ? res.status(404).json('Not found') : res.json(customer);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},

	async delete(req, res) {
		try {
			await Customer.delete(+req.params.id);
			res.sendStatus(204);
		} catch (err) {
			res.status(500).json(new BaseError(err.message));
		}
	},
};
