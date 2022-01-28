module.exports = {
	Photo: {
		type: "object",
		required: ["photo", "house_id"],
		properties: {
			id: {
				type: "integer",
				description: "The auto-generated id",
				example: 1,
			},
			photo: {
				type: "string",
				description: "The photo of the photo",
				required: true,
				example: "/link/photo22",
			},
			validation: {
				type: "boolean",
				description: "The validation of the photo",
				example: false,
			},
			customer_id: {
				type: "integer",
				description: "The id of the house it belongs to",
				required: true,
				example: 22,
			},
		},
		example: {
			id: 5,
			photo: "/link/photo33",
			validation: false,
			customer_id: 22,
		},
	},
};
