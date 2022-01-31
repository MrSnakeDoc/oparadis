module.exports = {
	host: process.env.HOST || "localhost",
	port: process.env.PORT || 8080,
	pg_url: process.env.DATABASE_URL,
	redis_url: process.env.REDIS_URL,
	jwt_secret: process.env.JWT_SECRET,
	refresh_jwt_secret: process.env.REFRESH_JWT_SECRET,
	salt: process.env.SALT || 20,
};
