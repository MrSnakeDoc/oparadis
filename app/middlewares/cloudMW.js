const { cloudCreate, cloudDelete } = require('../services/cloud');

module.exports = async (req, res, next) => {
    try {
        if(req.method === "POST"){
            if(req.body.photo){
                req.body.photo = await cloudCreate(req.body.photo);
                next();
            } else if (req.body.avatar){
                req.body.avatar = await cloudCreate(req.body.avatar);
                next();
            }else {
                next();
            }
        } else if (req.method === "PATCH"){
            if(req.body.photo){
                await cloudDelete(req.body.url);
                req.body.photo = await cloudCreate(req.body.photo);
                delete req.body.url;
                next();
            } else if (req.body.avatar) {
                await cloudDelete(req.body.url);
                req.body.avatar = await cloudCreate(req.body.avatar);
                delete req.body.url;
                next();
            } else {
                next();
            }
        }
        else if (req.method === "DELETE"){
            await cloudDelete(req.body.url);
            next();
        } else{
            next();
        }
    } catch (error) {
		console.log('cloudMW', error);
    }
};