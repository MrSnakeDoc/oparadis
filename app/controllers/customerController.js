const { Customer, BaseError } = require("../models");
const { encrypt } = require("../services/encrypt");

module.exports = {
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
			delete req.body.repeat_password;
			req.body.password = await encrypt(req.body.password);
			const customer = await new Customer(req.body).save();
			res.json(customer);
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
	async update(req, res) {
		try {
			delete req.body.repeat_password;
			if (req.body.pseudo === "") delete req.body.pseudo;
			const customer = await new Customer({
				id: +req.params.id,
				...req.body,
			}).update();
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
