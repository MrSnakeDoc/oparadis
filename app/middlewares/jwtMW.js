const jwt = require('../services/jwt');
const { host_online } = require('../config/');

module.exports = (req, res, next) => {
  const { host } = req.headers;
  const isLocalHost = host === 'localhost:5000' || host.startsWith('127.0.0.1');
  const isHostOnline = host === host_online;
  const isAdmin = req?.user?.isadmin;

  const token = req?.headers?.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  const payload = jwt.validateToken(token);
  if (!payload.data) return res.sendStatus(403);

  req.user = payload.data;

  if (!isLocalHost && !isHostOnline && !isAdmin) return res.sendStatus(401);

  next();
};