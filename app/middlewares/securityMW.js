module.exports = (req, res, next) => {
    if(req.method === 'PATCH'){
        +req.params.id !== req.user.id && req.user.id !== req.body.customer_id && req.user.id !== +req.params.id ? res.sendStatus(401) : next();
    }else {
        req.user.id !== +req.params.id ? res.sendStatus(401) : next();
    }    
};