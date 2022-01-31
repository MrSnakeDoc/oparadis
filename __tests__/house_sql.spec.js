const app = require("../server");
const request = require("supertest");

describe("Test route GET /houses", () => {
    test("should return a response with status 200", async () => {
            const response = await request(app).get("/houses");
            expect(response.statusCode).toBe(200);
    });

    test("should return an array in response.body", async () => {
        const response = await request(app).get("/houses");
        expect(typeof response.body).toBe("object");
        console.log(response.body[0]);
    });

    test("should return an array of objects in response.body", async () => {
        const response = await request(app).get("/houses");
        expect(typeof response.body[0].id).toBe("number");
		expect(typeof response.body[0].address).toBe("string");
		expect(typeof response.body[0].zip_code).toBe("string");
		expect(typeof response.body[0].city).toBe("string");
        expect(typeof response.body[0].country).toBeOneOf(["object"]);
        expect(typeof response.body[0].type).toBeOneOf(["object"]);
		expect(typeof response.body[0].title).toBe("string");
        expect(typeof response.body[0].nb_rooms).toBe("number");
        expect(typeof response.body[0].nb_bedrooms).toBe("number");
        expect(typeof response.body[0].surface).toBe("number");
        expect(typeof response.body[0].area).toBe("number");
        expect(typeof response.body[0].floor).toBe("number");
		expect(typeof response.body[0].description).toBe("string");
		expect(typeof response.body[0].latitude).toBe("string");
		expect(typeof response.body[0].longitude).toBe("string");
		expect(typeof response.body[0].map).toBe("string");
        expect(typeof response.body[0].internet).toBe("boolean");
        expect(typeof response.body[0].washing_machine).toBe("boolean");
        expect(typeof response.body[0].tv).toBe("boolean");
        expect(typeof response.body[0].hoven).toBe("boolean");
        expect(typeof response.body[0].microwave).toBe("boolean");
        expect(typeof response.body[0].dishwasher).toBe("boolean");
        expect(typeof response.body[0].bathub).toBe("boolean");
        expect(typeof response.body[0].shower).toBe("boolean");
        expect(typeof response.body[0].parking).toBe("boolean");
        expect(typeof response.body[0].created_at).toBe("string");
        expect(typeof response.body[0].updated_at).toBe("string");
        expect(typeof response.body[0].validation).toBe("boolean");
        expect(typeof response.body[0].customer_id).toBe("number");
    });
}); 