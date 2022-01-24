require("dotenv").config();
const { Pool } = require("pg");
let conf;

process.env.ONLINE === "true" || process.env.ONLINE === true
	? (conf = {
			connectionString: process.env.DATABASE_URL,
			ssl: {
				rejectUnauthorized: false,
			},
	  })
	: (conf = {
			connectionString: process.env.PG_URL,
	  });

console.log(conf);

module.exports = new Pool(conf);
