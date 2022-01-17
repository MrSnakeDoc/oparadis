const Joi = require("joi");

module.exports = {
	add_absentee: Joi.object({
		starting_date: Joi.date().timestamp().required(),
		ending_date: Joi.date().timestamp().required(),
	}),

	update_absentee: Joi.object({
		starting_date: Joi.date().timestamp().required(),
		ending_date: Joi.date().timestamp().required(),
	}),
};
