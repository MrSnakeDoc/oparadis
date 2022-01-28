const paramsSchema = require("./paramsSchema.js");
const customerSchema = require("./customerSchema");
const houseSchema = require("./houseSchema");
const animalSchema = require("./animalSchema");
const absenteeSchema = require("./absenteeSchema");
const photoSchema = require("./photoSchema");
const plantSchema = require("./plantSchema");
const typeSchema = require("./typeSchema");
const authSchema = require("./authSchema");

module.exports = {
	paramsSchema,
	...authSchema,
	...customerSchema,
	...houseSchema,
	...animalSchema,
	...absenteeSchema,
	...photoSchema,
	...plantSchema,
	...typeSchema,
};
