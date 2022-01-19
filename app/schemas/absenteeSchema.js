const Joi = require("joi");

module.exports = {
	add_absentee: Joi.object({
		starting_date: Joi.date().required(),
		ending_date: Joi.date().required(),
		customer_id: Joi.number().integer()
	}),

	update_absentee: Joi.object({
		starting_date: Joi.date().required(),
		ending_date: Joi.date().required(),
		customer_id: Joi.number().integer()
	}),
};
