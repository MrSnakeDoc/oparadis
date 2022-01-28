const Joi = require("joi");

const re_phone = RegExp(
	/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-7](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
);

module.exports = {
	add_customer: Joi.object({
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				maxDomainSegments: 3,
				// tlds: { allow: ["com", "net", "fr", "it"] },
			})
			.required(),
		password: Joi.string()
			.pattern(new RegExp(/^[a-zA-Z0-9-_$@#!?]{1,30}$/))
			.required(),
		repeat_password: Joi.ref("password"),
		firstname: Joi.string().required(),
		lastname: Joi.string().required(),
		pseudo: Joi.string().empty(""),
		phone_number: Joi.string().pattern(re_phone).required(),
		avatar: Joi.string(),
	}),
	update_customer: Joi.object({
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				maxDomainSegments: 3,
				// tlds: { allow: ["com", "net", "fr", "it"] },
			})
			.required(),
		firstname: Joi.string().required(),
		lastname: Joi.string().required(),
		pseudo: Joi.string().empty(""),
		phone_number: Joi.string().pattern(re_phone).required(),
		avatar: Joi.string(),
		isAdmin: Joi.boolean(),
	}),
};
