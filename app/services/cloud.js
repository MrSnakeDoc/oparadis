const { cloud_name,  api_key, api_secret} = require('../config');
// require('dotenv').config();
const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: cloud_name,
	api_key: api_key,
	api_secret: api_secret,
  });

module.exports = {
    cloud:	async (data) => {
		try {
        console.log('cloud');
            // Formater l'image
            const newImg = await cloudinary.image(data);
        console.log('img');
            // Envoyer l'image
            const response = await cloudinary.uploader.upload(newImg, {});
            console.log('response:', response);

            //return
            return response;
            
		} catch (error) {
			throw error;
		}
	},
};

// cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});

// cloudinary.url("sample.jpg")