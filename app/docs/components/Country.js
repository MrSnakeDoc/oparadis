module.exports = {
	Country: {
		type: "object",
		required: [],
		properties: {
			id: {
				type: "integer",
				description: "The auto-generated id",
				example: 1,
			},
			country: {
				type: "string",
				description: "The name of the country",
				required: true,
				example: "France",
			},
		},
		example: {
			id: 5,
			country: "France",
		},
	},
};
