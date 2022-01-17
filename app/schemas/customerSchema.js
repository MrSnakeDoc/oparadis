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
				tlds: { allow: ["com", "net", "fr", "it"] },
			})
			.required(),
		password: Joi.string()
			.pattern(new RegExp(/^[a-zA-Z0-9-_$@#!?.]{8,30}$/))
			.required(),
		repeat_password: Joi.ref("password"),
		firstname: Joi.string().required(),
		lastname: Joi.string().required(),
		phone_number: Joi.string().pattern(re_phone).required(),
		photo: Joi.binary().encoding('base64'),
	}),
	update_customer: Joi.object({
		id: Joi.number().integer().min(1).required(),
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				maxDomainSegments: 3,
				tlds: { allow: ["com", "net", "fr", "it"] },
			})
			.required(),
		password: Joi.string()
			.pattern(/^[a-zA-Z0-9-_$@#!?.]{8,30}$/)
			.required(),
		repeat_password: Joi.ref("password"),
		firstname: Joi.string().required(),
		lastname: Joi.string().required(),
		phone_number: Joi.string().pattern(re_phone).required(),
		photo: Joi.binary().encoding('base64'),
	}),
};

// +33164662903
// +33264662903
// +33364662903
// +33464662903
// +33564662903
// +33664662903
// +33764662903
// +33864662903
// 0164662903
// 0264662903
// 0364662903
// 0464662903
// 0564662903
// 0664662903
// 0764662903
// 0864662903
