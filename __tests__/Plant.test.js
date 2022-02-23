const Plant = require("../app/models/Plant");
// @ponicode
describe("Plant.findAll", () => {
	test("0", async () => {
		await Plant.findAll();
	});
});

// @ponicode
describe("Plant.findOne", () => {
	test("0", async () => {
		await Plant.findOne("03ea49f8-1d96-4cd0-b279-0684e3eec3a9");
	});

	test("1", async () => {
		await Plant.findOne("a85a8e6b-348b-4011-a1ec-1e78e9620782");
	});

	test("2", async () => {
		await Plant.findOne("7289708e-b17a-477c-8a77-9ab575c4b4d8");
	});

	test("3", async () => {
		await Plant.findOne("");
	});
});

// @ponicode
describe("Plant.save", () => {
	let inst;

	beforeEach(() => {
		inst = new Plant();
	});

	test("0", async () => {
		await inst.save();
	});
});

// @ponicode
describe("Plant.update", () => {
	let inst;

	beforeEach(() => {
		inst = new Plant();
	});

	test("0", async () => {
		await inst.update();
	});
});

// @ponicode
describe("Plant.delete", () => {
	test("0", async () => {
		await Plant.delete("7289708e-b17a-477c-8a77-9ab575c4b4d8");
	});

	test("1", async () => {
		await Plant.delete("a85a8e6b-348b-4011-a1ec-1e78e9620782");
	});

	test("2", async () => {
		await Plant.delete("03ea49f8-1d96-4cd0-b279-0684e3eec3a9");
	});

	test("3", async () => {
		await Plant.delete("4");
	});
});
