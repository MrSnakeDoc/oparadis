const bodySanitizer = require("./bodySanitizer");
const jwtMW = require("./jwtMW");
const adminMW = require("./adminMW");
const { validateBody, validateQuery } = require("./validationMW");
const validationFn = require("./validationFn");

module.exports = {
	adminMW,
	bodySanitizer,
	jwtMW,
	validateBody,
	validateQuery,
	...validationFn,
};
