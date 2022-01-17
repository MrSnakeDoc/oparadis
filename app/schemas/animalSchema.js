const Joi = require("joi");

module.exports = {
	add_animal: Joi.object({
		type: Joi.string().max(20).required(),
		race: Joi.string().max(20),
		diseases: Joi.string().max(70),
		notes: Joi.string().max(300),
		photo: Joi.binary().encoding('base64'),
		Validation: Joi.boolean()
	}),

	update_animal: Joi.object({
		type: Joi.string().max(20).required(),
		race: Joi.string().max(20),
		diseases: Joi.string().max(70),
		notes: Joi.string().max(300),
		photo: Joi.binary().encoding('base64'),
		Validation: Joi.boolean()
	}),
};
