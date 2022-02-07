const Joi = require("joi");

module.exports = {
	add_animal: Joi.object({
		type: Joi.string().max(20).required().error(new Error('This field is required')),
		race: Joi.string().max(20).error(new Error('Characters limit up to 20')),
		diseases: Joi.string().max(100).error(new Error('Characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('Characters limit up to 300')),
		photo: Joi.string(),
		customer_id: Joi.number().integer().error(new Error('Expected type integer')),
		Validation: Joi.boolean().error(new Error('Expected type boolean')),
	}),

	update_animal: Joi.object({
		type: Joi.string().max(20).required().error(new Error('This field is required')),
		race: Joi.string().max(20).error(new Error('Characters limit up to 20')),
		diseases: Joi.string().max(100).error(new Error('Characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('Characters limit up to 300')),
		photo: Joi.string().empty(""),
		url: Joi.string().empty(""),
		customer_id: Joi.number().integer().error(new Error('Expected type integer')),
		Validation: Joi.boolean().error(new Error('Expected type boolean')),
	}),
};