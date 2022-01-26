module.exports = {
	"/photos": {
		get: {
			tags: ["Photo CRUD operations"],
			description: "Retrieve a list of all Photos",
			summary: "Return a list of all Photos",
			parameters: [],
			responses: {
				200: {
					description: "Photos were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Photo",
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
					description: "List of Photos not found",
				},
			},
		},
		post: {
			tags: ["Photo CRUD operations"],
			description: "Return the created Photo",
			summary: "Return the Photo newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Photo",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Photo was created",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Photo",
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
	"/photos/{id}": {
		get: {
			tags: ["Photo CRUD operations"],
			description: "Retrieve a list of all Photos with category associated",
			summary: "Return a list of all Photos",
			parameters: [],
			responses: {
				200: {
					description: "Photos were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Photo",
								},
							},
						},
					},
				},
				404: {
					description: "Photo with the specified ID was not found.",
				},
			},
		},
		patch: {
			tags: ["Photo CRUD operations"],
			description: "Return the up to date Photo",
			summary: "Return the Photo newly updated",
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
							$ref: "#/components/schemas/Photo",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Photo was updated successfully",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Photo",
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
					description: "Photo not found",
				},
			},
		},
		delete: {
			tags: ["Photo CRUD operations"],
			description: "Delete the Photo with the provided id",
			summary: "Delete a photo with the provided id",
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
					description: "Photo not found",
				},
			},
		},
	},
};
