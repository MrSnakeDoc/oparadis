module.exports = {
	Absentee: {
		type: "object",
		required: ["starting_date", "ending_date", "customer_id"],
		properties: {
			id: {
				type: "integer",
				description: "The auto-generated id",
				example: 1,
			},
			starting_date: {
				type: "timestamptz",
				description: "The starting_date of the absentee",
				required: true,
				example: "2022-03-10 00:00:00+00",
			},
			ending_date: {
				type: "timestamptz",
				description: "The ending_date of the absentee",
				required: true,
				example: "2023-12-08 00:00:00+00",
			},
			customer_id: {
				type: "integer",
				description: "The id of the customer the animal belongs to",
				required: true,
				example: 22,
			},
			house_sitter: {
				type: "integer",
				description: "The id of the customer the animal belongs to",
				example: 32,
			},
		},
		example: {
			id: 5,
			starting_date: "2022-03-10 00:00:00+00",
			ending_date: "2023-12-08 00:00:00+00",
			customer_id: 22,
			house_sitter: 32,
		},
	},
};
