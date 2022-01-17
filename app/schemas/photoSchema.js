const Joi = require("joi");

module.exports = {
	add_photo: Joi.object({
		type: Joi.string(),
	}),

	update_photo: Joi.object({
		type: Joi.string(),
	}),
};
