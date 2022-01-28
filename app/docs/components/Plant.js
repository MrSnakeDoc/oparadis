module.exports = {
	Plant: {
		type: "object",
		required: ["type", "customer_id"],
		properties: {
			id: {
				type: "integer",
				description: "The auto-generated id",
				example: 1,
			},
			type: {
				type: "string",
				description: "The type of plant",
				required: true,
				example: "Rose",
			},
			notes: {
				type: "string",
				description: "The notes of plant",
				example: "Water 3 by day",
			},
			photo: {
				type: "string",
				description: "The photo of plant",
				example: "/link/photo87",
			},
			validation: {
				type: "boolean",
				description: "The validation of the plant",
				example: false,
			},
		},
		example: {
			id: 5,
			type: "Rose",
			notes: "Water 3 by day",
			photo: "/link/photo32",
			validation: true,
			customer_id: 22,
		},
	},
};
