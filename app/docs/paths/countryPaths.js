module.exports = {
	"/countries": {
		get: {
			tags: ["Country CRUD operations"],
			description: "Retrieve a list of all Countries",
			summary: "Return a list of all Countries",
			parameters: [],
			responses: {
				200: {
					description: "Countries were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Country",
								},
							},
						},
					},
				},
				400: {
					description: "Bad request",
				},
				403: {
					description: "Forbidden",
				},
				404: {
					description: "List of Countries not found",
				},
			},
		},
	},
	"/countries/{id}": {
		get: {
			tags: ["Country CRUD operations"],
			description: "Retrieve a list of all Countries with category associated",
			summary: "Return a list of all Countries",
			parameters: [],
			responses: {
				200: {
					description: "Countries were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Country",
								},
							},
						},
					},
				},
				404: {
					description: "Country with the specified ID was not found.",
				},
			},
		},
	},
};
