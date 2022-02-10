const Joi = require("joi");

module.exports = {
	add_plant: Joi.object({
		type: Joi.string().max(100).required().error(new Error('type: This field is required, characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('notes: Characters limit up to 300')),
		photo: Joi.string().empty(""),
        customer_id: Joi.number().integer().error(new Error('customer_id: Expected type integer')),
		// Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),

	update_plant: Joi.object({
		type: Joi.string().max(100).required().error(new Error('type: This field is required, characters limit up to 100')),
		notes: Joi.string().max(300).error(new Error('notes: Characters limit up to 300')),
		photo: Joi.string().empty(""),
		url: Joi.string().empty(""),
        customer_id: Joi.number().integer().error(new Error('customer_id: Expected type integer')),
		// Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),
};