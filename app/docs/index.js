const basicInfo = require("./basicInfo.js");
const servers = require("./servers.js");
const components = require("./components.js");
const paths = require("./paths.js");

module.exports = {
	...basicInfo,
	...servers,
	...components,
	...paths,
};
