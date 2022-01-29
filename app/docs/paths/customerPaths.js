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
	},
	"/customers/{id}": {
		get: {
			tags: ["Customer CRUD operations"],
			description: "Retrieve the customer with the given id",
			summary: "Return a customer with the given id",
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
					description: "Customer was obtained",
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
			summary: "Delete a customer by id",
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
					description: "The Customer was successfully deleted",
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
	"/customers/{id}/password": {
		patch: {
			tags: ["Customer CRUD operations"],
			description: "Change the customer password",
			summary: "Change the customer password",
			parameters: [
				{
					in: "path",
					name: "id",
					schema: {
						type: "integer",
						example: 102,
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
							$ref: "#/components/schemas/Password",
						},
					},
				},
			},
			responses: {
				200: {
					description: "Password was updated successfully",
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
	},
};
