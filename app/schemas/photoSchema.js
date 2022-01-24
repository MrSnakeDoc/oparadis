const Joi = require("joi");

module.exports = {
	add_photo: Joi.object({
		photo: Joi.binary().encoding('base64'),
        customer_id: Joi.number().integer(),
		Validation: Joi.boolean()
	}),

	update_photo: Joi.object({
		photo: Joi.binary().encoding('base64'),
        customer_id: Joi.number().integer(),
		Validation: Joi.boolean()
	}),
};
