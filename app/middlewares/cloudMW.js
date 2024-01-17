const {
  cloudCreatePhoto,
  cloudCreateAvatar,
  cloudDelete,
} = require('../services/cloud');

const handleUpload = async (req) => {
  const { url } = req.body;
  const { method } = req;
  const { body } = req;
  const photoType = body.photo ? 'photo' : 'avatar';
  if (body[photoType]) {
    if (method === 'PATCH' && url) {
      await cloudDelete(url);
      delete req.body.url;
    }
    body[photoType] = await (photoType === 'photo'
      ? cloudCreatePhoto
      : cloudCreateAvatar)(body[photoType]);
  }
};

const handleDelete = async (url) => await cloudDelete(url);

module.exports = async (req, res, next) => {
  const { url } = req.body;
  const { method } = req;

  try {
    if (['POST', 'PATCH'].includes(method)) await handleUpload(req);

    if (req.method === 'DELETE' && url) await handleDelete(url);

    next();
  } catch (error) {
    console.log('cloudMW', error);
    res.status(500).send(error);
  }
};
