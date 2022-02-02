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
	adminMW,
	jwtMW,
	signin_Validation,
	update_passwordValidation,
	signup_Validation,
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
	.post("/signup", signup_Validation, flush, authController.signup)
	.post("/signin", signin_Validation, authController.signin)
	.post("/token", authController.refreshToken)
	.delete("/logout", authController.disconnect);

router.patch("/isAdmin/:id", jwtMW, authController.update_isAdmin);

//! Double check on id with regex and joi (number between 1 and 9999)
router
	.get("/customers", jwtMW, cache, customerController.findAll)
	.get(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		customerController.findOne
	)
	//! We verify with update_customerValidation (joi) that the format is correct
	.patch(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		update_customerValidation,
		flush,
		customerController.update
	)
	.patch(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])/password",
		paramsValidation,
		jwtMW,
		flush,
		update_passwordValidation,
		authController.update_password
	)
	.delete(
		"/customers/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		flush,
		customerController.delete
	);

router
	.get("/houses/full", cache, houseController.findAllFull)
	.get("/housesfour", cache, houseController.findFour)
	.get(
		"/houses/full/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		houseController.findOneFull
	)
	.get("/houses", cache, houseController.findAll)
	.get(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		houseController.findOne
	)
	.post("/houses", jwtMW, add_houseValidation, flush, houseController.save)
	.patch(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		update_houseValidation,
		flush,
		houseController.update
	)
	.delete(
		"/houses/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		flush,
		houseController.delete
	);

router
	.get("/animals", jwtMW, cache, animalController.findAll)
	.get(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		animalController.findOne
	)
	.post("/animals", jwtMW, add_animalValidation, flush, animalController.save)
	.patch(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		update_animalValidation,
		flush,
		animalController.update
	)
	.delete(
		"/animals/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		flush,
		animalController.delete
	);

router
	.get("/photos", jwtMW, cache, photoController.findAll)
	.get(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		photoController.findOne
	)
	.post("/photos", jwtMW, add_photoValidation, flush, photoController.save)
	.patch(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		update_photoValidation,
		flush,
		photoController.update
	)
	.delete(
		"/photos/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		flush,
		photoController.delete
	);

router
	.get("/absentees", jwtMW, cache, absenteeController.findAll)
	.get(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		absenteeController.findOne
	)
	.post("/absentees", jwtMW, add_absenteeValidation, flush, absenteeController.save)
	.patch(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		update_absenteeValidation,
		flush,
		absenteeController.update
	)
	.delete(
		"/absentees/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		flush,
		absenteeController.delete
	);

router
	.get("/plants", jwtMW, cache, plantController.findAll)
	.get(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		plantController.findOne
	)
	.post("/plants", jwtMW, add_plantValidation, flush, plantController.save)
	.patch(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		update_plantValidation,
		flush,
		plantController.update
	)
	.delete(
		"/plants/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		flush,
		plantController.delete
	);

router
	.get("/types", jwtMW, cache, typeController.findAll)
	.get(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		typeController.findOne
	)
	.post("/types", jwtMW, add_typeValidation, flush, typeController.save)
	.patch(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		update_typeValidation,
		flush,
		typeController.update
	)
	.delete(
		"/types/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		flush,
		typeController.delete
	);

router
	.get("/countries", jwtMW, cache, countryController.findAll)
	.get(
		"/countries/:id([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
		paramsValidation,
		jwtMW,
		cache,
		countryController.findOne
	);

module.exports = router;
