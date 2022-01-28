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
			.required().error(new Error('Exemple : Winnie.l.ourson@gmiel.com')),
		password: Joi.string()
			.pattern(new RegExp(/^[a-zA-Z0-9-_$@#!?]{1,30}$/))
			.required().error(new Error('Le mot de passe peut comporter des minuscules, des majuscules, et ces caractéres spéciaux -_$@#!?')),
		repeat_password: Joi.ref("password"),
		firstname: Joi.string().required().error(new Error('Message : Merci de remplir ce champs')),
		lastname: Joi.string().required().error(new Error('Message : Merci de remplir ce champs')),
		pseudo: Joi.string().empty(""),
		phone_number: Joi.string().pattern(re_phone).required().error(new Error('Message : Merci de remplir ce champs')),
		avatar: Joi.string(),
	}),
	update_customer: Joi.object({
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				maxDomainSegments: 3,
				// tlds: { allow: ["com", "net", "fr", "it"] },
			})
			.required().error(new Error('Exemple : Winnie.l.ourson@gmiel.com')),
		firstname: Joi.string().required().error(new Error('Message : Merci de remplir ce champs')),
		lastname: Joi.string().required().error(new Error('Message : Merci de remplir ce champs')),
		pseudo: Joi.string().empty(""),
		phone_number: Joi.string().pattern(re_phone).required().error(new Error('Message : Merci de remplir ce champs')),
		avatar: Joi.string(),
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
