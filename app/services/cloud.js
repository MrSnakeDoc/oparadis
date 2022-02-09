const { cloud_name,  api_key, api_secret} = require('../config');
const cloudinary = require('cloudinary');
cloudinary.config({cloud_name, api_key, api_secret});

module.exports = {
  cloudCreatePhoto: async (data) => {
    cloudinary.image(data);
    const result = await cloudinary.uploader.upload(data, {width: 800, height: 600, crop: "limit"});
    return result.url;		
  },
  cloudCreateAvatar: async (data) => {
    cloudinary.image(data);
    const result = await cloudinary.uploader.upload(data, {width: 200, height: 200, radius: "max", crop: "fill"});
    return result.url;		
  },
  cloudDelete: async (data) => {
    const key = data.split('/')[data.split('/').length-1].split('.')[0];
    await cloudinary.uploader.destroy(key);
    return;
  },
};