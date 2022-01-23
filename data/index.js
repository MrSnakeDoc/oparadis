const customer = require("./customer");
const connection = require("./connection");
const country = require("./country");
const house = require("./house");
const house_type = require("./house_type");
const animal = require("./animal");
const plant = require("./plant");
const absentee = require("./absentee");
const photo = require("./photo");

module.exports = {
	customer,
	connection,
	house_type,
	country,
	house,
	animal,
	plant,
	absentee,
	photo,
};
