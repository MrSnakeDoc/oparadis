require("dotenv").config();
const client = require("../app/database");
const bcrypt = require("bcrypt");
const fullData = require("./");
const salt = 10;

(async () => {
	try {
		const tables = Object.keys(fullData).map((key) => key); //? output : [customer, document, login, appointment, treatment]
		//? tables.join(', ') => Output: 'customer, document, login, appointment, treatment'
		//! TRUNCATE customer, document, login, appointment, treatment RESTART IDENTITY cascade
		await client.query(
			`TRUNCATE ${tables.join(", ")} RESTART IDENTITY cascade`
		);
		for (const table of tables) {
			console.log("table =>", table);
			for (const elem of fullData[table]) {
				if (table === "customer") {
					elem.password = bcrypt.hashSync(elem.password, salt);
				}
				const keysArray = Object.keys(elem).map((key) => key); //? output : [name, age, address]
				const keys = keysArray.join(", ");
				const values = keysArray
					.map((element, ind) => `$${ind + 1}`)
					.join(", "); //? output : '$1, $2, $3, $4'
				const data = Object.keys(elem).map((key) => elem[key]);
				await client.query(
					`insert into "${table}" (${keys}) values (${values})`,
					data
				);
			}
		}
		if (process.env.ONLINE !== true) client.end();
	} catch (err) {
		if (err.code === "42P01") {
			console.log(`Query error, undefined table!, ${err.message}`);
		} else {
			console.log(err.message);
		}
	}
})();
