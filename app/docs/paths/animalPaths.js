module.exports = {
	"/animals": {
		get: {
			tags: ["Animal CRUD operations"],
			description: "Retrieve a list of all Animals",
			summary: "Return a list of all Animals",
			parameters: [],
			responses: {
				200: {
					description: "Animals were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Animal",
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
					description: "List of Animals not found",
				},
			},
		},
		post: {
			tags: ["Animal CRUD operations"],
			description: "Return the created Animal",
			summary: "Return the Animal newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Animal",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Animal was created",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Animal",
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
	"/animals/{id}": {
		get: {
			tags: ["Animal CRUD operations"],
			description: "Retrieve a list of all Animals with category associated",
			summary: "Return a list of all Animals",
			parameters: [],
			responses: {
				200: {
					description: "Animals were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Animal",
								},
							},
						},
					},
				},
				404: {
					description: "Animal with the specified ID was not found.",
				},
			},
		},
		patch: {
			tags: ["Animal CRUD operations"],
			description: "Return the up to date Animal",
			summary: "Return the Animal newly updated",
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
							$ref: "#/components/schemas/Animal",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Animal was updated successfully",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Animal",
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
					description: "Animal not found",
				},
			},
		},
		delete: {
			tags: ["Animal CRUD operations"],
			description: "Delete the Animal with the provided id",
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
					description: "Animal not found",
				},
			},
		},
	},
};
