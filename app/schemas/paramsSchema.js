const Joi = require("joi");

// JOI : - min(limit min number, 0 is not valid)
module.exports = Joi.object({
	id: Joi.number().integer().min(1).max(9999).required(),
});
