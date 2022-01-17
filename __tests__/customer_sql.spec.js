const app = require("../server");
const request = require("supertest");
const { Customer } = require("../app/models/");

console.log(process.env.pg_url);

// beforeEach(async () => await Customer.findAllFull());

// describe("#Customer.findAllFull", () => {
// 	test("should return an object", async () => {
// 		await expect(typeof Customer.findAllFull()).resolves.toBe("array");
// 	});
// 	test("contains test", async () => {
// 		await expect(Customer.findAllFull()).resolves.toContainEqual(
// 			expect.objectContaining({
// 				id: expect.any(Number),
// 				email: expect.any(Array),
// 				firstname: expect.any(String),
// 				lastname: expect.any(String),
// 				phone_number: expect.any(String),
// 				customer_url: expect.any(String || null),
// 				house: expect.any(Array || null),
// 				animals: expect.any(Array || null),
// 				absentee: expect.any(Array || null),
// 			})
// 		);
// 	});
// 	// test("should return a firstname included in the data source", () => {
// 	// 	expect(data).toContain(getRandomName());
// 	// });
// });
describe("Test route GET /customer/full", () => {
	it("should return a response with status 200", async () => {
		const response = await request(app).get("/customer/full");
		expect(response.status).to.equal(200);
	});
	it("shoul return an array in response.body", async () => {
		const response = await request(app).get("/customer/full");
		expect(response.body).to.be.a("array");
	});
	it("should return an array of objects in response.body", async () => {
		const response = await request(app).get("/customer/full");
		expect(response.body).toContainEqual(
			expect.objectContaining({
				id: expect.any(Number),
				email: expect.any(Array),
				firstname: expect.any(String),
				lastname: expect.any(String),
				phone_number: expect.any(String),
				customer_url: expect.any(String || null),
				house: expect.any(Array || null),
				animals: expect.any(Array || null),
				absentee: expect.any(Array || null),
			})
		);
	});
});
