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
	"/signin": {
		post: {
			tags: ["Authentication CRUD operations"],
			description: "Return the created Customer",
			summary: "Return the Customer newly created",
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
			description: "Return the created Customer",
			summary: "Return the Customer newly created",
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
					description: "Customer was authenticated",
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
    }
};