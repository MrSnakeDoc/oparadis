module.exports = {
	"/": {
		get: {
			tags: ["Home CRUD operations"],
			description: "Retrieve a list of 4 houses",
			summary: "Return a list of 4 houses",
			parameters: [],
			responses: {
				200: {
					description: "houses were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/House",
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
					description: "List of Houses not found",
				},
			},
		},
	},
	"/houses/full": {
		get: {
			tags: ["House CRUD operations"],
			description: "Retrieve a list of all houses",
			summary: "Return a list of all houses",
			parameters: [],
			responses: {
				200: {
					description: "houses were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/House",
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
					description: "List of Houses not found",
				},
			},
		},
	},
	"/houses/full/{id}": {
		get: {
			tags: ["House CRUD operations"],
			description: "Retrieve a list of all houses",
			summary: "Return a list of all houses",
			parameters: [
				{
					in: "path",
					name: "id",
					schema: {
						type: "integer",
						example: 24,
					},
					required: true,
					description: "id",
				},
			],
			responses: {
				200: {
					description: "houses were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/House",
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
					description: "List of Houses not found",
				},
			},
		},
	},
	"/houses": {
		get: {
			tags: ["House CRUD operations"],
			description: "Retrieve a list of all houses",
			summary: "Return a list of all houses",
			parameters: [],
			responses: {
				200: {
					description: "houses were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/House",
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
					description: "List of Houses not found",
				},
			},
		},
		post: {
			tags: ["House CRUD operations"],
			description: "Return the created house",
			summary: "Return the house newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/House",
						},
					},
				},
			},
			responses: {
				200: {
					description: "House was created",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/House",
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
	"/houses/{id}": {
		get: {
			tags: ["House CRUD operations"],
			description: "Retrieve the house with the given id",
			summary: "Return the house with the given id",
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
			responses: {
				200: {
					description: "House was obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/House",
								},
							},
						},
					},
				},
				404: {
					description: "House with the specified ID was not found.",
				},
			},
		},
		patch: {
			tags: ["House CRUD operations"],
			description: "Return the up to date House",
			summary: "Return the House newly updated",
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
							$ref: "#/components/schemas/House",
						},
					},
				},
			},
			responses: {
				200: {
					description: "House was updated successfully",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/House",
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
					description: "House not found",
				},
			},
		},
		delete: {
			tags: ["House CRUD operations"],
			description: "Delete the House with the provided id",
			summary: "Delete a House with the provided id",
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
					description: "The House was successfully deleted",
				},
				400: {
					description: "Wrong ID",
				},
				403: {
					description: "Forbidden",
				},
				404: {
					description: "House not found",
				},
			},
		},
	},
};
