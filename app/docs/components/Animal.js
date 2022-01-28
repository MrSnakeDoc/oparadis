module.exports = {
	Animal: {
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
				description: "The type of animal",
				required: true,
				example: "cat",
			},
			race: {
				type: "string",
				description: "The race of the animal",
				example: "main coon",
			},
			diseases: {
				type: "string",
				description: "The diseases of the animal",
				example: "Renal failure",
			},
			notes: {
				type: "string",
				description: "The diseases of the animal",
				example: "Garfield is very cute, large and very very cuddly",
			},
			photo: {
				type: "string",
				description: "The photo of the animal",
				example: "/link/photo45",
			},
			validation: {
				type: "boolean",
				description: "The validation of the animal",
				example: false,
			},
			customer_id: {
				type: "integer",
				description: "The id of the customer the animal belongs to",
				required: true,
				example: 22,
			},
		},
		example: {
			id: 5,
			type: "cat",
			race: "Turc Van",
			diseases: "Renal failure",
			notes: "Garfield is very cute, large and very very cuddly",
			photo: "/link/photo85",
			validation: true,
			customer_id: 22,
		},
	},
};
