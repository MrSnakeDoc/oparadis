const Joi = require("joi");

module.exports = {
	add_photo: Joi.object({
		photo: Joi.string().required().error(new Error('photo: This field is required')),
        customer_id: Joi.number().integer().required().error(new Error('customer_id: This field is required, Expected type integer')),
		Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),

	update_photo: Joi.object({
		photo: Joi.string().required().error(new Error('photo: This field is required')),
		url: Joi.string().required().error(new Error('url: This field is required, url')),
        customer_id: Joi.number().integer().required().error(new Error('customer_id: This field is required, Expected type integer')),
		Validation: Joi.boolean().error(new Error('Validation: Expected type boolean')),
	}),
};
