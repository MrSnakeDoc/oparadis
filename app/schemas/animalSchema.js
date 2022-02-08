const Joi = require("joi");

module.exports = {
	add_animal: Joi.object({
		type: Joi.string().max(20).required().error(new Error('type: This field is required')),
		race: Joi.string().max(20).error(new Error('race: Characters limit up to 20')),
		diseases: Joi.string().max(100).error(new Error('diseases: Characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('notes: Characters limit up to 300')),
		photo: Joi.string().empty(""),
		customer_id: Joi.number().integer().error(new Error('customer_id: Expected type integer')),
		Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),

	update_animal: Joi.object({
		type: Joi.string().max(20).required().error(new Error('type: This field is required')),
		race: Joi.string().max(20).error(new Error('race: Characters limit up to 20')),
		diseases: Joi.string().max(100).error(new Error('diseases: Characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('notes: Characters limit up to 300')),
		photo: Joi.string().empty(""),
		url: Joi.string().empty(""),
		customer_id: Joi.number().integer().error(new Error('customer_id: Expected type integer')),
		Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),
};