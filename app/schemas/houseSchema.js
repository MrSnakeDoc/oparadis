const Joi = require("joi");

module.exports = {
	add_house: Joi.object({
		address: Joi.string().required(),
		zip_code: Joi.string().required(),
		city: Joi.string().max(70).required(),
		country: Joi.string().max(45).required(),
		type: Joi.number().integer().required(),
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
		internet: Joi.boolean(),
		washing_machine: Joi.boolean(),
		TV: Joi.boolean(),
		hoven: Joi.boolean(),
		microwave: Joi.boolean(),
		dishwasher: Joi.boolean(),
		bathtub: Joi.boolean(),
		shower: Joi.boolean(),
		parking: Joi.boolean(),
		customer_id: Joi.number().integer()
		// validation: Joi.boolean(),
}),

	update_house: Joi.object({
		address: Joi.string().required(),
		zip_code: Joi.string().required(),
		city: Joi.string().max(70).required(),
		country: Joi.string().max(45).required(),
		type: Joi.number().integer().required(),
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
		internet: Joi.boolean(),
		washing_machine: Joi.boolean(),
		TV: Joi.boolean(),
		hoven: Joi.boolean(),
		microwave: Joi.boolean(),
		dishwasher: Joi.boolean(),
		bathtub: Joi.boolean(),
		shower: Joi.boolean(),
		parking: Joi.boolean(),
		customer_id: Joi.number().integer()
		// validation: Joi.boolean(),
	}),
};
