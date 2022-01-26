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
			description: "Return an access token and a refresh token",
			summary: "Return an access token and a refresh token",
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
					description: "Customer was authenticated",
					content: {
						"application/json": {
							schema: {
								items: {
									$ref: "#/components/schemas/Token",
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
			description: "Return a new access token",
			summary: "Return a new access token",
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
					description: "Access Token was successfully refreshed",
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
			description: "Delete the refresh token and renders it inactive",
			summary: "Delete a refresh token",
			parameters: [],
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
