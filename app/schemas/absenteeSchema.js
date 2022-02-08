const Joi = require("joi");

module.exports = {
	add_absentee: Joi.object({
		starting_date: Joi.date().required().error(new Error('starting_date: This field is required, expected type date')),
		ending_date: Joi.date().required().error(new Error('ending_date: This field is required, expected type date')),
		customer_id: Joi.number().integer().error(new Error('customer_id: This field is required')),
	}),

	update_absentee: Joi.object({
		starting_date: Joi.date().required().error(new Error('starting_date: This field is required, expected type date')),
		ending_date: Joi.date().required().error(new Error('ending_date: This field is required, expected type date')),
		customer_id: Joi.number().integer().error(new Error('customer_id: This field is required')),
	}),
};
