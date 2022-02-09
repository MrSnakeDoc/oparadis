const Joi = require("joi");

module.exports = {
	add_house: Joi.object({
		address: Joi.string()
			.required()
			.error(new Error("address: This field is required")),
		zip_code: Joi.string()
			.required()
			.error(new Error("zip_code: This field is required")),
		city: Joi.string()
			.max(70)
			.required()
			.error(
				new Error("city: This field is required, characters limit up to 70")
			),
		country: Joi.number()
			.integer()
			.required()
			.error(
				new Error("country: This field is required, expected type integer")
			),
		type: Joi.number()
			.integer()
			.required()
			.error(new Error("type: This field is required, expected type integer")),
		title: Joi.string()
			.max(30)
			.error(new Error("title: characters limit up to 30")),
		nb_rooms: Joi.number()
			.integer()
			.error(new Error("nb_rooms: Expected type integer")),
		nb_bedrooms: Joi.number()
			.integer()
			.error(new Error("nb_bedrooms: Expected type integer")),
		surface: Joi.number()
			.integer()
			.error(new Error("surface: Expected type integer")),
		area: Joi.number()
			.integer()
			.error(new Error("area: Expected type integer")),
		floor: Joi.number()
			.integer()
			.error(new Error("floor: Expected type integer")),
		description: Joi.string().empty(""),
		latitude: Joi.string()
			.required()
			.error(new Error("latitude: This field is required")),
		longitude: Joi.string()
			.required()
			.error(new Error("longitude: This field is required")),
		map: Joi.string().empty(""),
		internet: Joi.boolean().error(new Error("internet: Expected type boolean")),
		washing_machine: Joi.boolean().error(
			new Error("washing_machine: Expected type boolean")
		),
		TV: Joi.boolean().error(new Error("TV: Expected type boolean")),
		hoven: Joi.boolean().error(new Error("hoven: Expected type boolean")),
		microwave: Joi.boolean().error(
			new Error("microwave: Expected type boolean")
		),
		dishwasher: Joi.boolean().error(
			new Error("dishwasher: Expected type boolean")
		),
		bathtub: Joi.boolean().error(new Error("bathtub: Expected type boolean")),
		shower: Joi.boolean().error(new Error("shower: Expected type boolean")),
		parking: Joi.boolean().error(new Error("parking: Expected type boolean")),
		customer_id: Joi.number()
			.integer()
			.error(new Error("customer_id: This field is required")),
		// validation: Joi.boolean().error(new Error('validation: Expected type boolean')),
	}),

	update_house: Joi.object({
		address: Joi.string()
			.required()
			.error(new Error("address: This field is required")),
		zip_code: Joi.string()
			.required()
			.error(new Error("zip_code: This field is required")),
		city: Joi.string()
			.max(70)
			.required()
			.error(
				new Error("city: This field is required, characters limit up to 70")
			),
		country: Joi.number()
			.integer()
			.required()
			.error(new Error("country: This field is required")),
		type: Joi.number()
			.integer()
			.required()
			.error(new Error("type: This field is required")),
		title: Joi.string()
			.max(30)
			.error(new Error("title: characters limit up to 30")),
		nb_rooms: Joi.number()
			.integer()
			.error(new Error("nb_rooms: expected type integer")),
		nb_bedrooms: Joi.number()
			.integer()
			.error(new Error("nb_bedrooms: expected type integer")),
		surface: Joi.number()
			.integer()
			.error(new Error("surface: expected type integer")),
		area: Joi.number()
			.integer()
			.error(new Error("area: expected type integer")),
		floor: Joi.number()
			.integer()
			.error(new Error("floor: expected type integer")),
		description: Joi.string().empty(""),
		latitude: Joi.string()
			.required()
			.error(new Error("latitude: This field is required")),
		longitude: Joi.string()
			.required()
			.error(new Error("longitude: This field is required")),
		map: Joi.string().empty(""),
		internet: Joi.boolean().error(new Error("internet: Expected type boolean")),
		washing_machine: Joi.boolean().error(
			new Error("washing_machine: Expected type boolean")
		),
		TV: Joi.boolean().error(new Error("TV: Expected type boolean")),
		hoven: Joi.boolean().error(new Error("hoven: Expected type boolean")),
		microwave: Joi.boolean().error(
			new Error("microwave: Expected type boolean")
		),
		dishwasher: Joi.boolean().error(
			new Error("dishwasher: Expected type boolean")
		),
		bathtub: Joi.boolean().error(new Error("bathtub: Expected type boolean")),
		shower: Joi.boolean().error(new Error("shower: Expected type boolean")),
		parking: Joi.boolean().error(new Error("parking: Expected type boolean")),
		customer_id: Joi.number()
			.integer()
			.error(new Error("customer_id: This field is required")),
		// validation: Joi.boolean().error(
		// 	new Error("validation: Expected type boolean")
		// ),
	}),
};
