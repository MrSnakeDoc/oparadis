const Joi = require("joi");

module.exports = {
	add_plant: Joi.object({
		type: Joi.string().max(64).required(),
		notes: Joi.string().max(300),
		photo: Joi.binary().encoding('base64'),
        customer_id: Joi.number().integer(),
		Validation: Joi.boolean()
	}),

	update_plant: Joi.object({
		type: Joi.string().max(64).required(),
		notes: Joi.string().max(300),
		photo: Joi.binary().encoding('base64'),
        customer_id: Joi.number().integer(),
		Validation: Joi.boolean()
	}),
};