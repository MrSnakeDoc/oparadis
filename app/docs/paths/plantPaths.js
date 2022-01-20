module.exports = {
	"/plants": {
		get: {
			tags: ["Plant CRUD operations"],
			description: "Retrieve a list of all Plants",
			summary: "Return a list of all Plants",
			parameters: [],
			responses: {
				200: {
					description: "Plants were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Plant",
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
					description: "List of Plants not found",
				},
			},
		},
		post: {
			tags: ["Plant CRUD operations"],
			description: "Return the created Plant",
			summary: "Return the Plant newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Plant",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Plant was created",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Plant",
								},
							},
						},
					},
				},
				400: {
					description: "Some fields cannot be empty",
				},
				403: {
					description: "Forbidden",
				},
				404: {
					description: "Ressources not found",
				},
			},
		},
	},
	"/plants/{id}": {
		get: {
			tags: ["Plant CRUD operations"],
			description: "Retrieve a list of all Plants with category associated",
			summary: "Return a list of all Plants",
			parameters: [],
			responses: {
				200: {
					description: "Plants were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Plant",
								},
							},
						},
					},
				},
				404: {
					description: "Plant with the specified ID was not found.",
				},
			},
		},
		patch: {
			tags: ["Plant CRUD operations"],
			description: "Return the up to date Plant",
			summary: "Return the Plant newly updated",
			parameters: [
				{
					in: "path",
					name: "id",
					schema: {
						type: "integer",
						example: 17,
					},
					required: true,
					description: "id",
				},
			],
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Plant",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Plant was updated successfully",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Plant",
								},
							},
						},
					},
				},
				400: {
					description: "Some fields cannot be empty",
				},
				403: {
					description: "Forbidden",
				},
				404: {
					description: "Plant not found",
				},
			},
		},
		delete: {
			tags: ["Plant CRUD operations"],
			description: "Delete the Plant with the provided id",
			summary: "Delete a label by id",
			parameters: [
				{
					in: "path",
					name: "id",
					schema: {
						type: "integer",
						example: 30,
					},
					required: true,
					description: "id",
				},
			],
			responses: {
				200: {
					description: "The label was successfully deleted",
				},
				400: {
					description: "Wrong ID",
				},
				403: {
					description: "Forbidden",
				},
				404: {
					description: "Plant not found",
				},
			},
		},
	},
};
