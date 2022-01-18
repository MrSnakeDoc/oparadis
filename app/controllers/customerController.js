const { Customer, BaseError } = require("../models");

module.exports = {
	async findAllFull(_, res) {
		try {
			const customers = await Customer.findAllFull();
			res.json(customers);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async findOneFull(req, res) {
		try {
			const customer = await Customer.findOneFull(+req.params.id);
			res.json(customer);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async findAll(_, res) {
		try {
			const customers = await Customer.findAll();
			res.json(customers);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async findOne(req, res) {
		try {
			const customer = await Customer.findOne(+req.params.id);
			res.json(customer);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async save(req, res) {
		try {
			// console.log(req.body);
			const customer = await new Customer(req.body).save();
			res.json(customer);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			const customer = await new Customer(req.body).update;
			res.json(customer);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async delete(req, res) {
		try {
			await Customer.delete(+req.params.id);
			res.json("Customer Deleted");
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
};
