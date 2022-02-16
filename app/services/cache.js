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
	// existys(key) veirfy if the key exists
	if (await db.exists(key)) {
		//get: stock response
		const cachedString = await db.get(key);
		// parse : transform the backup into JSON recover
		const cachedValue = JSON.parse(cachedString);
		return response.json(cachedValue);
	}
	// bind : The bind() method creates a new function which, 
	// when it is called, has as its context this the value passed as a 
	// parameter and possibly a series of arguments which will precede 
	// those provided when calling the function created.
	const originalResponseJson = response.json.bind(response);
	response.json = async (data) => {
		// stringify :  converts a JavaScript value to a JSON string
		const str = JSON.stringify(data);
		keys.push(key);
		// set : create a backup with a key and stock str
		await db.set(key, str, { EX: timeout, NX: true });
		originalResponseJson(data);
	};
	next();
};

// Method for delete the cache
const flush = async (request, response, next) => {
	while ((key = keys.shift())) {
		await db.del(key);
	}
	next();
};

module.exports = { cache, flush };
