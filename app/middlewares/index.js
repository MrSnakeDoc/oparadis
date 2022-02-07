const bodySanitizer = require("./bodySanitizer");
const jwtMW = require("./jwtMW");
const adminMW = require("./adminMW");
const securityMW = require("./securityMW");
const { validateBody, validateQuery } = require("./validationMW");
const validationFn = require("./validationFn");
const cloudMW = require('./cloudMW');

module.exports = {
	cloudMW,
	adminMW,
	securityMW,
	bodySanitizer,
	jwtMW,
	validateBody,
	validateQuery,
	...validationFn,
};
