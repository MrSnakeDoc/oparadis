const Joi = require("joi");

module.exports = {
	add_plant: Joi.object({
		type: Joi.string().max(20).required().error(new Error('This field is required, characters limit up to 20')),
		notes: Joi.string().max(300).error(new Error('Characters limit up to 300')),
		photo: Joi.string(),
        customer_id: Joi.number().integer().error(new Error('Expected type integer')),
		Validation: Joi.boolean().error(new Error('Expected type boolean')),
	}),

	update_plant: Joi.object({
		type: Joi.string().max(30).required().error(new Error('This field is required, characters limit up to 30')),
		notes: Joi.string().max(300).error(new Error('Characters limit up to 300')),
		photo: Joi.string(),
		url: Joi.string(),
        customer_id: Joi.number().integer().error(new Error('Expected type integer')),
		Validation: Joi.boolean().error(new Error('Expected type boolean')),
	}),
};