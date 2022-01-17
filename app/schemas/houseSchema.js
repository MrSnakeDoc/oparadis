const Joi = require("joi");

module.exports = {
	add_house: Joi.object({
		adress: Joi.string().required(),
		zip_code: Joi.string().required(),
		city: Joi.string().max(70).required(),
		country: Joi.string().max(45).required(),
		type: Joi.string().required(),
		title: Joi.string().max(30),
		nb_rooms: Joi.number().integer(),
		nb_bedrooms: Joi.number().integer(),
		surface: Joi.number().integer(),
		area: Joi.number().integer(),
		floor: Joi.number().integer(),
		description: Joi.string(),
		latitude: Joi.string().required(),
		longitude: Joi.string().required(),
		map: Joi.string().required(),
	}),

	update_house: Joi.object({
		adress: Joi.string().required(),
		zip_code: Joi.string().required(),
		city: Joi.string().max(70).required(),
		country: Joi.string().max(45).required(),
		type: Joi.string().required(),
		title: Joi.string().max(30),
		nb_rooms: Joi.number().integer(),
		nb_bedrooms: Joi.number().integer(),
		surface: Joi.number().integer(),
		area: Joi.number().integer(),
		floor: Joi.number().integer(),
		description: Joi.string(),
		latitude: Joi.string().required(),
		longitude: Joi.string().required(),
		map: Joi.string().required(),
	}),
};
