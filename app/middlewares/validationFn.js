const { validateBody, validateParams } = require("./validationMW");
const {
	bodySchema,
	paramsSchema,
	add_customer,
	update_customer,
	add_house,
	update_house,
	add_animal,
	update_animal,
	add_absentee,
	update_absentee,
	add_photo,
	update_photo,
} = require("../schemas/");

module.exports = {
	add_customerValidation: validateBody(add_customer),
	update_customerValidation: validateBody(update_customer),
	add_houseValidation: validateBody(add_house),
	update_houseValidation: validateBody(update_house),
	add_animalValidation: validateBody(add_animal),
	update_animalValidation: validateBody(update_animal),
	add_absenteeValidation: validateBody(add_absentee),
	update_absenteeValidation: validateBody(update_absentee),
	add_photoValidation: validateBody(add_photo),
	update_photoValidation: validateBody(update_photo),
	bodyValidation: validateBody(bodySchema),
	paramsValidation: validateParams(paramsSchema),
};
