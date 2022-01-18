const { Router } = require("express");
const {
	customerController,
	houseController,
	animalController,
	photoController,
	absenteeController,
	plantController,
} = require("./controllers/");
const { cache, flush } = require("./services/cache");
const {
	jwtMW,
	add_customerValidation,
	update_customerValidation,
	add_houseValidation,
	update_houseValidation,
	add_animalValidation,
	update_animalValidation,
	add_absenteeValidation,
	update_absenteeValidation,
	add_photoValidation,
	update_photoValidation,
	add_plantValidation,
	update_plantValidation,
	paramsValidation,
} = require("./middlewares/");
const router = Router();

router
	.get("/customers/full", customerController.findAllFull)
	.get(
		"/customers/full/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		customerController.findOneFull
	)
	.get("/customers", customerController.findAll)
	.get(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		customerController.findOne
	)
	.post("/customers", add_customerValidation, customerController.save)
	.patch(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_customerValidation,
		customerController.update
	)
	.delete(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		customerController.delete
	);

router
	.get("/houses", houseController.findAll)
	.get(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		houseController.findOne
	)
	.post("/houses", add_houseValidation, houseController.save)
	.patch(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		update_houseValidation,
		houseController.update
	)
	.delete(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		houseController.delete
	);

router
	.get("/animals", animalController.findAll)
	.get(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		animalController.findOne
	)
	.post("/animals", add_animalValidation, animalController.save)
	.patch(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		update_animalValidation,
		animalController.update
	)
	.delete(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		animalController.delete
	);

router
	.get("/photos", photoController.findAll)
	.get(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		photoController.findOne
	)
	.post("/photos", add_photoValidation, photoController.save)
	.patch(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		update_photoValidation,
		photoController.update
	)
	.delete(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		photoController.delete
	);

router
	.get("/absentees", absenteeController.findAll)
	.get(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		absenteeController.findOne
	)
	.post("/absentees", add_absenteeValidation, absenteeController.save)
	.patch(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		update_absenteeValidation,
		absenteeController.update
	)
	.delete(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		absenteeController.delete
	);

router
	.get("/plants", plantController.findAll)
	.get(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		plantController.findOne
	)
	.post("/plants", add_plantValidation, plantController.save)
	.patch(
		"plantls/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		update_plantValidation,
		plantController.update
	)
	.delete(
		"plantls/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		plantController.delete
	);

module.exports = router;
