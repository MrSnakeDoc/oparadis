const { createClient } = require("redis");
const { redis_url } = require("../config/");
const db = createClient({ url: redis_url });
db.connect();
const prefix = "oparadis:token:";
const timeout = 7200;

module.exports = {
	async cache(id, refreshToken) {
		const key = `${prefix}${id}`;
		await db.set(key, refreshToken, { EX: timeout, NX: true });
		return;
	},

	async verifyToken(id, token) {
		const verifiedToken = await db.get(`${prefix}${id}`);
		return verifiedToken === token ? true : undefined;
	},
};
