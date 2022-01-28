const Signup = require("./Signup");
const Signin = require("./Signin");
const Token = require("./Token");
const AccessToken = require("./AccessToken");
const RefreshToken = require("./RefreshToken");
const Customer = require("./Customer");
const Animal = require("./Animal");
const Plant = require("./Plant");
const Absentee = require("./Absentee");
const Type = require("./Type");
const Photo = require("./Photo");
const Country = require("./Country");

module.exports = {
	...Signup,
	...Signin,
	...Token,
	...AccessToken,
	...RefreshToken,
	...Customer,
	...Animal,
	...Plant,
	...Absentee,
	...Type,
	...Photo,
	...Country,
};
