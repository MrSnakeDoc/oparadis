module.exports = {
	Signin: {
		type: "object",
		required: ["email", "password"],
		properties: {
			email: {
				type: "string",
				description: "The email of the customer",
				required: true,
				example: "jemoustique@gmail.com",
			},
			password: {
				type: "string",
				description: "The password of the customer",
				required: true,
				example: "jeanbon69",
			},
		},
		example: {
			email: "a@a.com",
			password: "Paradis13$",
		},
	},
};
