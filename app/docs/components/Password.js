module.exports = {
	Password: {
		type: "object",
		required: ["ancient_password", "password", "repeat_password"],
		properties: {
			ancient_password: {
				type: "string",
				description: "Ancient Password",
				required: true,
				example: "Paradis13$",
			},
			password: {
				type: "string",
				description: "Password",
				required: true,
				example: "Paradis12$",
			},
			repeat_password: {
				type: "string",
				description: "Repeat Password",
				required: true,
				example: "Paradis12$",
			},
		},
		example: {
			ancient_password: "Paradis13$",
			password: "Paradis12$",
			repeat_password: "Paradis12$",
		},
	},
};
