const app = require("../server");
const request = require("supertest");
const { Customer } = require("../app/models/");

describe("Test route GET /customers", () => {
	test("should return a response with status 200", async () => {
		const response = await request(app).get("/customers");
		expect(response.statusCode).toBe(200);
	});

	test("should return an array in response.body", async () => {
		const response = await request(app).get("/customers");
		expect(typeof response.body).toBe("object");
	});

	test("should return an array of objects in response.body", async () => {
		const response = await request(app).get("/customers");
		expect(typeof response.body[0].id).toBe("number");
		expect(typeof response.body[0].email).toBe("string");
		expect(typeof response.body[0].firstname).toBe("string");
		expect(typeof response.body[0].lastname).toBe("string");
		expect(typeof response.body[0].pseudo).toBe("string");
		expect(typeof response.body[0].phone_number).toBe("string");
		expect(typeof response.body[0].avatar).toBeOneOf(["string", "object"]);
		expect(typeof response.body[0].created_at).toBe("string");
		expect(typeof response.body[0].updated_at).toBe("string");
	});
});