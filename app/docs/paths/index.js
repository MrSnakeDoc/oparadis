const customers = require("./customerPaths");
const houses = require("./housePaths");
const animals = require("./animalPaths");
const plants = require("./plantPaths");
const absentee = require("./absenteePaths");
const type = require("./typePaths");
const photo = require("./photoPaths");
const country = require("./countryPaths");

module.exports = {
	...customers,
	...houses,
	...animals,
	...plants,
	...absentee,
	...type,
	...photo,
	...country,
};
