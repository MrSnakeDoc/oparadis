module.exports = {
	RefreshToken: {
		type: "object",
		required: ["access_token", "refresh_token"],
		properties: {
			refresh_token: {
				type: "string",
				description: "Authentication: refresh_token",
				required: true,
				example:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMDEsImlhdCI6MTY0MzEwMDYxMCwiZXhwIjoxNjQzMTA0MjEwfQ.5aU00qsTYoZaHwPWRaAytj36PfxqBNsYMPSugxxaCZw",
			},
		},
		example: {
			refresh_token:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMDEsImlhdCI6MTY0MzEwMDYxMCwiZXhwIjoxNjQzMTA0MjEwfQ.5aU00qsTYoZaHwPWRaAytj36PfxqBNsYMPSugxxaCZw",
		},
	},
};
