require("dotenv").config();
const { Pool } = require("pg");
const fullData = require("../data/");

let conf = {
	connectionString: process.env.PG_URL,
};

const client = new Pool(conf);
const fs = require("fs");

(async () => {
	try {
		const tables = Object.keys(fullData).map((key) => key); //? output : [customer, document, login, appointment, treatment]
		//? tables.join(', ') => Output: 'customer, document, login, appointment, treatment'
		//! TRUNCATE customer, document, login, appointment, treatment RESTART IDENTITY cascade
		await client.query(
			`TRUNCATE ${tables.join(", ")} RESTART IDENTITY cascade`
		);
		for (table of tables) {
			for (elem of fullData[table]) {
				if (table === "house") {
					fullData[table].forEach((element) => {
						element.map = `https://maps.google.com/maps?q=${element.latitude},${element.longitude}`;
					});
				}
				if (table === "photo") {
					fullData[table].forEach((element) => {
						files = fs.readdirSync("./photos/").map((file) => {
							return `${file}`;
						});
						let file = files[Math.floor(Math.random() * files.length)];
						const base64str =
							"data:image/jpg;base64," +
							fs.readFileSync(`./photos/${file}`, "base64");
						element.photo = base64str;
					});
				}
				const keysArray = Object.keys(fullData[table][0]).map((key) => key); //? output : [name, age, address]
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
		client.end();
	} catch (err) {
		if (err.code === "42P01") {
			console.log(`Query error, undefined table!, ${err.message}`);
		} else {
			console.log(err.message);
		}
	}
})();
