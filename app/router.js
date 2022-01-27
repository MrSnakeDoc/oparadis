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
	.get("/isAdmin", jwtMW, authController.isAdmin)
	.post("/signup", add_customerValidation, flush, authController.signup)
	.post("/signin", authController.signin)
	.post("/token", authController.refreshToken)
	.delete("/logout", authController.disconnect);

router.patch("/isAdmin/:id", authController.update_isAdmin);

//! Double check on id with regex and joi (number between 1 and 9999)
router
	.get("/customers", jwtMW, cache, customerController.findAll)
	.get(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		jwtMW,
		paramsValidation,
		cache,
		customerController.findOne
	)
	//! We verify with update_customerValidation (joi) that the format is correct
	.patch(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		jwtMW,
		paramsValidation,
		update_customerValidation,
		flush,
		customerController.update
	)
	.patch(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])/password",
		paramsValidation,
		authController.update_password
	)
	.delete(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		jwtMW,
		paramsValidation,
		flush,
		customerController.delete
	);

router
	.get("/houses/full", cache, houseController.findAllFull)
	.get(
		"/houses/full/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		houseController.findOneFull
	)
	.get("/houses", cache, houseController.findAll)
	.get(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		houseController.findOne
	)
	.post("/houses", add_houseValidation, flush, houseController.save)
	.patch(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_houseValidation,
		flush,
		houseController.update
	)
	.delete(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		flush,
		houseController.delete
	);

router
	.get("/animals", cache, animalController.findAll)
	.get(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		animalController.findOne
	)
	.post("/animals", add_animalValidation, flush, animalController.save)
	.patch(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_animalValidation,
		flush,
		animalController.update
	)
	.delete(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		flush,
		animalController.delete
	);

router
	.get("/photos", cache, photoController.findAll)
	.get(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		photoController.findOne
	)
	.post("/photos", add_photoValidation, flush, photoController.save)
	.patch(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_photoValidation,
		flush,
		photoController.update
	)
	.delete(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		flush,
		photoController.delete
	);

router
	.get("/absentees", cache, absenteeController.findAll)
	.get(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		absenteeController.findOne
	)
	.post("/absentees", add_absenteeValidation, flush, absenteeController.save)
	.patch(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_absenteeValidation,
		flush,
		absenteeController.update
	)
	.delete(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		flush,
		absenteeController.delete
	);

router
	.get("/plants", cache, plantController.findAll)
	.get(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		plantController.findOne
	)
	.post("/plants", add_plantValidation, flush, plantController.save)
	.patch(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_plantValidation,
		flush,
		plantController.update
	)
	.delete(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		flush,
		plantController.delete
	);

router
	.get("/types", cache, typeController.findAll)
	.get(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		typeController.findOne
	)
	.post("/types", add_typeValidation, flush, typeController.save)
	.patch(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		update_typeValidation,
		flush,
		typeController.update
	)
	.delete(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		flush,
		typeController.delete
	);

router
	.get("/countries", cache, countryController.findAll)
	.get(
		"/countries/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		cache,
		countryController.findOne
	);

module.exports = router;
