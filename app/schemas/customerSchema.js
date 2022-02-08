const Joi = require("joi");

const re_phone = RegExp(
	/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-7](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
);

module.exports = {
	update_customer: Joi.object({
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				maxDomainSegments: 3,
				tlds: { allow: ["com", "net", "fr", "it"] },
			})
			.required().error(new Error('Example : Winnie.l.ourson@gmiel.com, domain authorized : com, net, fr, it, io')),
		firstname: Joi.string().required().error(new Error('firstname: This field is required')),
		lastname: Joi.string().required().error(new Error('lastname: This field is required')),
		pseudo: Joi.string().empty(""),
		phone_number: Joi.string().pattern(re_phone).required().error(new Error('Message : Your phone number must begin with +33 or 0, example : +33164662903 , 0164662903')),
		avatar: Joi.string().empty(""),
		url: Joi.string().empty(""),
	}),
};