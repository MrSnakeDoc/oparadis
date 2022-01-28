module.exports = {
	Signup: {
		type: "object",
		required: ["email", "firstname", "lastname", "phone_number"],
		properties: {
			id: {
				type: "integer",
				description: "The auto-generated id",
				example: 1,
			},
			email: {
				type: "string",
				description: "The email of the customer",
				required: true,
				example: "jemoustique@gmail.com",
			},
			firstname: {
				type: "string",
				description: "The firstname of the customer",
				required: true,
				example: "Jules-Edouard",
			},
			lastname: {
				type: "string",
				description: "The lastname of the customer",
				required: true,
				example: "Moustique",
			},
			pseudo: {
				type: "string",
				description: "Pseudo of the customer",
				example: "The Moustique",
			},
			phone_number: {
				type: "string",
				format: "Phone number",
				required: true,
				description: "The phone number of the customer",
				example: "0175492412",
			},
			avatar: {
				type: "string",
				description: "The photo of the customer",
				example: "/link/photo52",
			},
		},
		example: {
			id: 5,
			email: "jemoustique@gmail.com",
			password: "$paradis12",
			repeat_password: "$paradis12",
			firstname: "Jules-Edouard",
			lastname: "Moustique",
			pseudo: "The Moustique",
			phone_number: "0175492412",
			avatar: "/link/photo54",
		},
	},
};
