module.exports = {
	"/absentees": {
		get: {
			tags: ["Absentee CRUD operations"],
			description: "Retrieve a list of all Absentees",
			summary: "Return a list of all Absentees",
			parameters: [],
			responses: {
				200: {
					description: "Absentees were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Absentee",
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
					description: "List of Absentees not found",
				},
			},
		},
		post: {
			tags: ["Absentee CRUD operations"],
			description: "Return the created Absentee",
			summary: "Return the Absentee newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Absentee",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Absentee was created",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Absentee",
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
	"/absentees/{id}": {
		get: {
			tags: ["Absentee CRUD operations"],
			description: "Retrieve a list of all Absentees with category associated",
			summary: "Return a list of all Absentees",
			parameters: [],
			responses: {
				200: {
					description: "Absentees were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Absentee",
								},
							},
						},
					},
				},
				404: {
					description: "Absentee with the specified ID was not found.",
				},
			},
		},
		patch: {
			tags: ["Absentee CRUD operations"],
			description: "Return the up to date Absentee",
			summary: "Return the Absentee newly updated",
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
							$ref: "#/components/schemas/Absentee",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Absentee was updated successfully",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Absentee",
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
					description: "Absentee not found",
				},
			},
		},
		delete: {
			tags: ["Absentee CRUD operations"],
			description: "Delete the Absentee with the provided id",
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
					description: "Absentee not found",
				},
			},
		},
	},
};
