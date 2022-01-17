const { pg_url } = require("./config");
const { Pool } = require("pg");

let conf = {
	connectionString: pg_url,
};

if (process.env.NODE_ENV === "prod") {
	conf.ssl = {
		rejectUnauthorized: false,
	};
}

module.exports = new Pool(conf);
