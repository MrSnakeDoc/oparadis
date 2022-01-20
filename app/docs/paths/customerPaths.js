module.exports = {
	"/customers": {
		get: {
			tags: ["Customer CRUD operations"],
			description: "Retrieve a list of all customers",
			summary: "Return a list of all customers",
			parameters: [],
			responses: {
				200: {
					description: "Customers were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Customer",
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
					description: "List of customers not found",
				},
			},
		},
		post: {
			tags: ["Customer CRUD operations"],
			description: "Return the created customer",
			summary: "Return the customer newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Customer",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Customer was created",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Customer",
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
	"/customers/{id}": {
		get: {
			tags: ["Customer CRUD operations"],
			description: "Retrieve a list of all Customers with category associated",
			summary: "Return a list of all Customers",
			parameters: [],
			responses: {
				200: {
					description: "Customers were obtained",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: "#/components/schemas/Customer",
								},
							},
						},
					},
				},
				404: {
					description: "Customer with the specified ID was not found.",
				},
			},
		},
		patch: {
			tags: ["Customer CRUD operations"],
			description: "Return the up to date Customer",
			summary: "Return the customer newly updated",
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
							$ref: "#/components/schemas/Customer",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Customer was updated successfully",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Customer",
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
					description: "customer not found",
				},
			},
		},
		delete: {
			tags: ["Customer CRUD operations"],
			description: "Delete the customer with the provided id",
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
					description: "customer not found",
				},
			},
		},
	},
};
