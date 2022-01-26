module.exports = {};
if (process.env.NODE_ENV === "prod") {
	servers = {
		servers: [
			{
				url: "https://oparadisapi.herokuapp.com/",
			},
		],
	};
} else {
	servers = {
		servers: [
			{
				url: "http://localhost:5000",
			},
		],
	};
}
