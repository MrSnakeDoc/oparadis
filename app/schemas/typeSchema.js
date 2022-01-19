const Joi = require("joi");

module.exports = {
	add_type: Joi.object({
		type: Joi.string().max(20).required(),
	}),

	update_type: Joi.object({
		type: Joi.string().max(20).required(),
	}),
};
