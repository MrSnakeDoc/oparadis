const Joi = require("joi");

module.exports = {
	add_photo: Joi.object({
		photo: Joi.binary().encoding('base64'),
		Validation: Joi.boolean()
	}),

	update_photo: Joi.object({
		photo: Joi.binary().encoding('base64'),
		Validation: Joi.boolean()
	}),
};
