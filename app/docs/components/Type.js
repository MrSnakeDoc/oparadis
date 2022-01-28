module.exports = {
	Type: {
		type: "object",
		required: [],
		properties: {
			id: {
				type: "integer",
				description: "The auto-generated id",
				example: 1,
			},
			type: {
				type: "string",
				description: "The type of house",
				required: true,
				example: "Maison",
			},
		},
		example: {
			id: 5,
			type: "Loft",
		},
	},
};
