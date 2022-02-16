const Joi = require("joi");

// JOI : - max(limit max character)
// 		 - boolean(need boolean)
module.exports = {
	add_animal: Joi.object({
		type: Joi.string().max(100).required().error(new Error('type: This field is required, Characters limit up to 100')),
		race: Joi.string().max(100).error(new Error('race: Characters limit up to 100')),
		diseases: Joi.string().max(100).error(new Error('diseases: Characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('notes: Characters limit up to 300')),
		photo: Joi.string().empty(""),
		customer_id: Joi.number().integer().error(new Error('customer_id: Expected type integer')),
		// Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),

	update_animal: Joi.object({
		type: Joi.string().max(100).required().error(new Error('type: This field is required, Characters limit up to 100')),
		race: Joi.string().max(100).error(new Error('race: Characters limit up to 100')),
		diseases: Joi.string().max(100).error(new Error('diseases: Characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('notes: Characters limit up to 300')),
		photo: Joi.string().empty(""),
		url: Joi.string().empty(""),
		customer_id: Joi.number().integer().error(new Error('customer_id: Expected type integer')),
		// Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),
};