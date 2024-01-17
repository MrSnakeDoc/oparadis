const { host_online } = require('../config/');

module.exports = (req, res, next) => {
	const { host } = req.headers

	const isLocalHost = host === "localhost:5000" || host.startsWith("127.0.0.1");
  	const isHostOnline = host === host_online;
  	const isAdmin = req?.user?.isadmin;

	if (!isLocalHost &&	!isHostOnline && !isAdmin) res.sendStatus(403);
	
	next();
};

