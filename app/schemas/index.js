const paramsSchema = require("./paramsSchema.js");
const customerSchema = require("./customerSchema");
const houseSchema = require("./houseSchema");
const animalSchema = require("./animalSchema");
const absenteeSchema = require("./absenteeSchema");
const photoSchema = require("./photoSchema");

module.exports = {
	paramsSchema,
	...customerSchema,
	...houseSchema,
	...animalSchema,
	...absenteeSchema,
	...photoSchema,
};
