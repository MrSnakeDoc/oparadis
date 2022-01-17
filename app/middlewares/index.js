const bodySanitizer = require("./bodySanitizer");
const jwtMW = require("./jwtMW");
const { validateBody, validateQuery } = require("./validationMW");
const validationFn = require("./validationFn");

module.exports = {
	bodySanitizer,
	jwtMW,
	validateBody,
	validateQuery,
	...validationFn,
};
