const { Router } = require("express");
const {
	customerController,
	houseController,
	animalController,
	photoController,
	absenteeController,
	plantController,
	typeController,
	countryController,
	authController,
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
	add_typeValidation,
	update_typeValidation,
} = require("./middlewares/");
const router = Router();

// JWT road
//! We verify with add_customerValidation (joi) that the format is correct
router
	.post("/signup", add_customerValidation, customerController.save)
	.post("/token", authController.refreshToken)
	.post("/signin", authController.signin)
	.delete("/logout", authController.disconnect);

	//! Double check on id with regex and joi (number between 1 and 9999)
router
	.get("/isAdmin", jwtMW, customerController.isAdmin)
	.get("/customers", jwtMW, customerController.findAll)
	.get(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		jwtMW,
		paramsValidation,
		customerController.findOne
	)
	//! We verify with update_customerValidation (joi) that the format is correct
	.patch(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		jwtMW,
		paramsValidation,
		update_customerValidation,
		customerController.update
	)
	.delete(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		jwtMW,
		paramsValidation,
		customerController.delete
	);

router
	.get("/houses/full", houseController.findAllFull)
	.get(
		"/houses/full/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		houseController.findOneFull
	)
	.get("/houses", houseController.findAll)
	.get(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		houseController.findOne
	)
	.post("/houses", add_houseValidation, houseController.save)
	.patch(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_houseValidation,
		houseController.update
	)
	.delete(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		houseController.delete
	);

router
	.get("/animals", animalController.findAll)
	.get(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		animalController.findOne
	)
	.post("/animals", add_animalValidation, animalController.save)
	.patch(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_animalValidation,
		animalController.update
	)
	.delete(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		animalController.delete
	);

router
	.get("/photos", photoController.findAll)
	.get(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		photoController.findOne
	)
	.post("/photos", add_photoValidation, photoController.save)
	.patch(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_photoValidation,
		photoController.update
	)
	.delete(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		photoController.delete
	);

router
	.get("/absentees", absenteeController.findAll)
	.get(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		absenteeController.findOne
	)
	.post("/absentees", add_absenteeValidation, absenteeController.save)
	.patch(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_absenteeValidation,
		absenteeController.update
	)
	.delete(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		absenteeController.delete
	);

router
	.get("/plants", plantController.findAll)
	.get(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		plantController.findOne
	)
	.post("/plants", add_plantValidation, plantController.save)
	.patch(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_plantValidation,
		plantController.update
	)
	.delete(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		plantController.delete
	);

router
	.get("/types", typeController.findAll)
	.get(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		typeController.findOne
	)
	.post("/types", add_typeValidation, typeController.save)
	.patch(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_typeValidation,
		typeController.update
	)
	.delete(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		typeController.delete
	);

router
	.get("/types", typeController.findAll)
	.get(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		typeController.findOne
	);

router
	.get("/countries", countryController.findAll)
	.get(
		"/countries/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		countryController.findOne
	);

module.exports = router;
