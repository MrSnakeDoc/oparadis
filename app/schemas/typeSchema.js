const Joi = require("joi");

module.exports = {
	add_type: Joi.object({
		type: Joi.string().max(20).required().error(new Error('type: This field is required, characters limit up to 20')),
	}),

	update_type: Joi.object({
		type: Joi.string().max(20).required().error(new Error('type: This field is required, characters limit up to 20')),
	}),
};
