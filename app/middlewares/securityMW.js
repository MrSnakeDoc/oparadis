module.exports = (req, res, next) => {
	const userId = +req.user.id;
	const paramId = +req.params.id;
  
	if (userId !== paramId) return res.sendStatus(401);
  
	if (req.method === 'PATCH' && userId !== req.body.customer_id)
	  return res.sendStatus(401);
  
	next();
};