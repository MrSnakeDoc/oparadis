const Joi = require("joi");

module.exports = {
	add_photo: Joi.object({
		photo: Joi.string().required().error(new Error('This field is required')),
        customer_id: Joi.number().integer().required().error(new Error('This field is required, Expected type integer')),
		Validation: Joi.boolean().error(new Error('Expected type boolean')),
	}),

	update_photo: Joi.object({
		photo: Joi.string().required().error(new Error('This field is required')),
		url: Joi.string().required().error(new Error('This field is required, url')),
        customer_id: Joi.number().integer().required().error(new Error('This field is required, Expected type integer')),
		Validation: Joi.boolean().error(new Error('Expected type boolean')),
	}),
};
