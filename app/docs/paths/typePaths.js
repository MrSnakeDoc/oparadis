module.exports = {
	"/types": {
		get: {
			tags: ["Type CRUD operations"],
			description: "Retrieve a list of all Types",
			summary: "Return a list of all Types",
			parameters: [],
			responses: {
				200: {
					description: "Types were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Type",
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
					description: "List of Types not found",
				},
			},
		},
		post: {
			tags: ["Type CRUD operations"],
			description: "Return the created Type",
			summary: "Return the Type newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Type",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Type was created",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Type",
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
	"/types/{id}": {
		get: {
			tags: ["Type CRUD operations"],
			description: "Retrieve a list of all Types with category associated",
			summary: "Return a list of all Types",
			parameters: [],
			responses: {
				200: {
					description: "Types were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Type",
								},
							},
						},
					},
				},
				404: {
					description: "Type with the specified ID was not found.",
				},
			},
		},
		patch: {
			tags: ["Type CRUD operations"],
			description: "Return the up to date Type",
			summary: "Return the Type newly updated",
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
							$ref: "#/components/schemas/Type",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Type was updated successfully",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Type",
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
					description: "Type not found",
				},
			},
		},
		delete: {
			tags: ["Type CRUD operations"],
			description: "Delete the Type with the provided id",
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
					description: "Type not found",
				},
			},
		},
	},
};
