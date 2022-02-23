const { createClient } = require("redis");
const { redis_url } = require("../config/");
const db = createClient({ url: redis_url });
db.connect();
const prefix = "oparadis:";
const timeout = 10;
const keys = [];

// Method created cache
const cache = async (request, response, next) => {
	// create an entry key for redis (create from a backup)
	const key = `${prefix}${request.url}`;
	// db.exists(key) verify if the key exists
	if (await db.exists(key)) {
		//get: retrieve the value of the key
		const cachedString = await db.get(key);
		// parse : transform the backup into JSON
		const cachedValue = JSON.parse(cachedString);
		return response.json(cachedValue);
	}
	// bind : With the bind() method, an object can borrow a method from another object.
	const originalResponseJson = response.json.bind(response);
	response.json = async (data) => {
		// stringify :  converts a JavaScript value to a JSON string
		const str = JSON.stringify(data);
		keys.push(key);
		// set : creates a backup with a key and store it in redis
		await db.set(key, str, { EX: timeout, NX: true });
		originalResponseJson(data);
	};
	next();
};

// Method for delete the cache
const flush = async (request, response, next) => {
	let key;
	while ((key = keys.shift())) {
		await db.del(key);
	}
	next();
};

module.exports = { cache, flush };
