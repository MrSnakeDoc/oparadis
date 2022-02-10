const { cloud_name, api_key, api_secret } = require("../config");
const cloudinary = require("cloudinary");
cloudinary.config({ cloud_name, api_key, api_secret });

module.exports = {
	cloudCreatePhoto: async (data) => {
		cloudinary.image(data);
		const result = await cloudinary.uploader.upload(data);
		result.url = result.url
			.split("https://res.cloudinary.com/oparadis/image/upload/")
			.splice(1, 1)
			.map(
				(x) =>
					`https://res.cloudinary.com/oparadis/image/upload/c_scale,w_1280/${x}`
			)
			.join();
		return result.url;
	},
	cloudCreateAvatar: async (data) => {
		cloudinary.image(data);
		const result = await cloudinary.uploader.upload(data);
		result.url = result.url
			.split("https://res.cloudinary.com/oparadis/image/upload/")
			.splice(1, 1)
			.map(
				(x) =>
					`https://res.cloudinary.com/oparadis/image/upload/w_200,h_200,c_fill,g_face,r_max/${x}`
			)
			.join();
		return result.url;
	},
	cloudDelete: async (data) => {
		const key = data.split("/")[data.split("/").length - 1].split(".")[0];
		await cloudinary.uploader.destroy(key);
		return;
	},
};
