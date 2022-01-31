const { createClient } = require("redis");
const { redis_url } = require("./config/");
const db = createClient({ url: redis_url });
module.exports = db.connect();
