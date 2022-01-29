module.exports = {
	"/signup": {
		post: {
			tags: ["Authentication CRUD operations"],
			description: "Return the created customer",
			summary: "Return the customer newly created",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Signup",
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
									$ref: "#/components/schemas/Signup",
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
	"/signin": {
		post: {
			tags: ["Authentication CRUD operations"],
			description: "Return an access token and a refresh token in headers",
			summary: "Return an access token and a refresh token in headers",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/Signin",
						},
					},
				},
			},
			responses: {
				200: {
					description:
						"Customer was authenticated - Access token and refresh token returned in headers",
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
	"/token": {
		post: {
			tags: ["Authentication CRUD operations"],
			description:
				"Return a new access token - Needed : Refresh token in headers!",
			summary: "Return a new access token in headers",
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							$ref: "#/components/schemas/RefreshToken",
						},
					},
				},
			},
			responses: {
				200: {
					description:
						"Access Token was successfully refreshed - Access Token returned in headers",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/AccessToken",
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
	"/logout": {
		delete: {
			tags: ["Authentication CRUD operations"],
			description: `Delete the refresh token and renders it inactive: Needed: Refresh token in headers`,
			summary: "Delete a refresh token",
			parameters: [],
			responses: {
				200: {
					description:
						"The refresh token was successfully deleted was successfully logged out",
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
	"/isAdmin": {
		get: {
			tags: ["Authentication CRUD operations"],
			description: "Gives the status admin or not of a customer",
			summary: "Gives the status admin or not of a customer",
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
					description: "Status was obtained",
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
};
