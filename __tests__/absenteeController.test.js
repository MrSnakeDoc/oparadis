const absenteeController = require("../app/controllers/absenteeController");

// @ponicode
describe("absenteeController.findOne", () => {
	test("0", async () => {
		await absenteeController.findOne(
			{ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } },
			{ status: () => 500, json: () => '"{"x":[10,null,null,null]}"' }
		);
	});

	test("1", async () => {
		await absenteeController.findOne(
			{ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } },
			{ status: () => 200, json: () => '"{"x":[10,null,null,null]}"' }
		);
	});

	test("2", async () => {
		await absenteeController.findOne(
			{ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } },
			{ status: () => 400, json: () => '"[3,"false",false]"' }
		);
	});

	test("3", async () => {
		await absenteeController.findOne(
			{ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } },
			{ status: () => 500, json: () => '"{"x":[10,null,null,null]}"' }
		);
	});

	test("4", async () => {
		await absenteeController.findOne(
			{ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } },
			{ status: () => 429, json: () => '""2006-01-02T14:04:05.000Z""' }
		);
	});

	test("5", async () => {
		await absenteeController.findOne(
			{ params: { id: "" } },
			{ status: () => -Infinity, json: () => "" }
		);
	});
});

// @ponicode
describe("absenteeController.save", () => {
	test("0", async () => {
		await absenteeController.save({ body: "add" }, { status: () => 200 });
	});

	test("1", async () => {
		await absenteeController.save({ body: "account" }, { status: () => 404 });
	});

	test("2", async () => {
		await absenteeController.save({ body: "location" }, { status: () => 404 });
	});

	test("3", async () => {
		await absenteeController.save({ body: "accounts" }, { status: () => 400 });
	});

	test("4", async () => {
		await absenteeController.save({ body: "value" }, { status: () => 500 });
	});

	test("5", async () => {
		await absenteeController.save({ body: "" }, { status: () => -Infinity });
	});
});

// @ponicode
describe("absenteeController.update", () => {
	test("0", async () => {
		await absenteeController.update(
			{ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, body: "add" },
			{ status: () => 400, json: () => '"[3,"false",false]"' }
		);
	});

	test("1", async () => {
		await absenteeController.update(
			{ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, body: "group" },
			{ status: () => 500, json: () => '"[3,"false",false]"' }
		);
	});

	test("2", async () => {
		await absenteeController.update(
			{ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, body: "group" },
			{ status: () => 200, json: () => '"[3,"false",false]"' }
		);
	});

	test("3", async () => {
		await absenteeController.update(
			{
				params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" },
				body: "package",
			},
			{ status: () => 404, json: () => '"[3,"false",false]"' }
		);
	});

	test("4", async () => {
		await absenteeController.update(
			{
				params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" },
				body: "package",
			},
			{ status: () => 500, json: () => '"{"x":[10,null,null,null]}"' }
		);
	});

	test("5", async () => {
		await absenteeController.update(
			{ params: { id: "" }, body: "" },
			{ status: () => NaN, json: () => "" }
		);
	});
});

// @ponicode
describe("absenteeController.delete", () => {
	test("0", async () => {
		await absenteeController.delete(
			{ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } },
			{ sendStatus: () => 200, status: () => 500 }
		);
	});

	test("1", async () => {
		await absenteeController.delete(
			{ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } },
			{ sendStatus: () => 404, status: () => 200 }
		);
	});

	test("2", async () => {
		await absenteeController.delete(
			{ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } },
			{ sendStatus: () => 500, status: () => 500 }
		);
	});

	test("3", async () => {
		await absenteeController.delete(
			{ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } },
			{ sendStatus: () => 200, status: () => 429 }
		);
	});

	test("4", async () => {
		await absenteeController.delete(
			{ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } },
			{ sendStatus: () => 429, status: () => 400 }
		);
	});

	test("5", async () => {
		await absenteeController.delete(
			{ params: { id: "" } },
			{ sendStatus: () => NaN, status: () => NaN }
		);
	});
});
