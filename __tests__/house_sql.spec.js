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
        expect(typeof response.body[0].bathtub).toBe("boolean");
        expect(typeof response.body[0].shower).toBe("boolean");
        expect(typeof response.body[0].parking).toBe("boolean");
        expect(typeof response.body[0].created_at).toBe("string");
        expect(typeof response.body[0].updated_at).toBe("string");
        expect(typeof response.body[0].validation).toBe("boolean");
    });
});

describe("Test route GET /houses/1", () => {
    test("should return a response with status 200", async () => {
            const response = await request(app).get("/houses/1");
            expect(response.statusCode).toBe(200);
    });

    test("should return an array in response.body", async () => {
        const response = await request(app).get("/houses/1");
        expect(typeof response.body).toBe("object");
    });

    test("should return an array of objects in response.body", async () => {
        const response = await request(app).get("/houses/1");
        expect(typeof response.body.id).toBe("number");
		expect(typeof response.body.address).toBe("string");
		expect(typeof response.body.zip_code).toBe("string");
		expect(typeof response.body.city).toBe("string");
        expect(typeof response.body.country).toBeOneOf(["object"]);
        expect(typeof response.body.type).toBeOneOf(["object"]);
		expect(typeof response.body.title).toBe("string");
        expect(typeof response.body.nb_rooms).toBe("number");
        expect(typeof response.body.nb_bedrooms).toBe("number");
        expect(typeof response.body.surface).toBe("number");
        expect(typeof response.body.area).toBe("number");
        expect(typeof response.body.floor).toBe("number");
		expect(typeof response.body.description).toBe("string");
		expect(typeof response.body.latitude).toBe("string");
		expect(typeof response.body.longitude).toBe("string");
		expect(typeof response.body.map).toBe("string");
        expect(typeof response.body.internet).toBe("boolean");
        expect(typeof response.body.washing_machine).toBe("boolean");
        expect(typeof response.body.tv).toBe("boolean");
        expect(typeof response.body.hoven).toBe("boolean");
        expect(typeof response.body.microwave).toBe("boolean");
        expect(typeof response.body.dishwasher).toBe("boolean");
        expect(typeof response.body.bathtub).toBe("boolean");
        expect(typeof response.body.shower).toBe("boolean");
        expect(typeof response.body.parking).toBe("boolean");
        expect(typeof response.body.created_at).toBe("string");
        expect(typeof response.body.updated_at).toBe("string");
        expect(typeof response.body.validation).toBe("boolean");
    });
});

describe('/houses/full', () => {
    test("should return a response with status 200", async () => {
        const response = await request(app).get("/houses/full");
        expect(response.statusCode).toBe(200);
    });

    test("should return an array in response.body", async () => {
        const response = await request(app).get("/houses/full");
        expect(typeof response.body).toBe("object");
    });

    test("should return an array of objects in response.body", async () => {
        const response = await request(app).get("/houses/full");
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
        expect(typeof response.body[0].bathtub).toBe("boolean");
        expect(typeof response.body[0].shower).toBe("boolean");
        expect(typeof response.body[0].parking).toBe("boolean");
        expect(typeof response.body[0].created_at).toBe("string");
        expect(typeof response.body[0].updated_at).toBe("string");
        expect(typeof response.body[0].validation).toBe("boolean");
        expect(typeof response.body[0].customer).toBeOneOf(["object"]);
        expect(typeof response.body[0].animals).toBeOneOf(["object"]);
        expect(typeof response.body[0].plant).toBeOneOf(["object"]);
        expect(typeof response.body[0].photos).toBeOneOf(["object"]);
        expect(typeof response.body[0].absentee).toBeOneOf(["object"]);
    });
});

describe('/houses/full/1', () => {
    test("should return a response with status 200", async () => {
        const response = await request(app).get("/houses/full");
        expect(response.statusCode).toBe(200);
    });

    test("should return an array in response.body", async () => {
        const response = await request(app).get("/houses/full/1");
        expect(typeof response.body).toBe("object");
        console.log(response.body[0]);
    });

    test("should return an array of objects in response.body", async () => {
        const response = await request(app).get("/houses/full/1");
        expect(typeof response.body.id).toBe("number");
		expect(typeof response.body.address).toBe("string");
		expect(typeof response.body.zip_code).toBe("string");
		expect(typeof response.body.city).toBe("string");
        expect(typeof response.body.country).toBeOneOf(["object"]);
        expect(typeof response.body.type).toBeOneOf(["object"]);
		expect(typeof response.body.title).toBe("string");
        expect(typeof response.body.nb_rooms).toBe("number");
        expect(typeof response.body.nb_bedrooms).toBe("number");
        expect(typeof response.body.surface).toBe("number");
        expect(typeof response.body.area).toBe("number");
        expect(typeof response.body.floor).toBe("number");
		expect(typeof response.body.description).toBe("string");
		expect(typeof response.body.latitude).toBe("string");
		expect(typeof response.body.longitude).toBe("string");
		expect(typeof response.body.map).toBe("string");
        expect(typeof response.body.internet).toBe("boolean");
        expect(typeof response.body.washing_machine).toBe("boolean");
        expect(typeof response.body.tv).toBe("boolean");
        expect(typeof response.body.hoven).toBe("boolean");
        expect(typeof response.body.microwave).toBe("boolean");
        expect(typeof response.body.dishwasher).toBe("boolean");
        expect(typeof response.body.bathtub).toBe("boolean");
        expect(typeof response.body.shower).toBe("boolean");
        expect(typeof response.body.parking).toBe("boolean");
        expect(typeof response.body.created_at).toBe("string");
        expect(typeof response.body.updated_at).toBe("string");
        expect(typeof response.body.validation).toBe("boolean");
        expect(typeof response.body.customer).toBeOneOf(["object"]);
        expect(typeof response.body.animals).toBeOneOf(["object"]);
        expect(typeof response.body.plant).toBeOneOf(["object"]);
        expect(typeof response.body.photos).toBeOneOf(["object"]);
        expect(typeof response.body.absentee).toBeOneOf(["object"]);
    });
});