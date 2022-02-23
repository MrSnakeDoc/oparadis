const jwtMW = require("../app/middlewares/jwtMW");
// @ponicode
describe("jwtMW", () => {
	test("0", () => {
		let object = [
			["Michael", "Pierre Edouard", "Anas", "George"],
			["Edmond", "Pierre Edouard", "Jean-Philippe", "Anas"],
			["Pierre Edouard", "Anas", "Pierre Edouard", "Edmond"],
			["George", "Anas", "Edmond", "Anas"],
		];
		let result = jwtMW(
			{
				headers: {
					host: "localhost:5000",
					authorization: { split: () => object },
				},
			},
			{ sendStatus: () => 400, status: () => 429 },
			() => true
		);
		expect(result).toMatchSnapshot();
	});

	test("1", () => {
		let object = [
			["Pierre Edouard", "Anas", "George", "Edmond"],
			["Jean-Philippe", "Anas", "Anas", "Edmond"],
			["Anas", "Anas", "Pierre Edouard", "Michael"],
			["Pierre Edouard", "Anas", "Michael", "Michael"],
		];
		let result = jwtMW(
			{
				headers: {
					host: "localhost:5000",
					authorization: { split: () => object },
				},
			},
			{ sendStatus: () => 429, status: () => 500 },
			() => true
		);
		expect(result).toMatchSnapshot();
	});

	test("2", () => {
		let object = [
			["George", "Michael", "Michael", "Edmond"],
			["George", "George", "George", "Michael"],
			["Pierre Edouard", "Jean-Philippe", "Edmond", "Edmond"],
			["Pierre Edouard", "Jean-Philippe", "Anas", "George"],
		];
		let result = jwtMW(
			{
				headers: {
					host: "localhost:5000",
					authorization: { split: () => object },
				},
			},
			{ sendStatus: () => 200, status: () => 404 },
			() => false
		);
		expect(result).toMatchSnapshot();
	});

	test("3", () => {
		let object = [
			["George", "George", "Anas", "Edmond"],
			["Edmond", "Edmond", "Michael", "George"],
			["Anas", "Michael", "Anas", "Pierre Edouard"],
			["Michael", "Edmond", "Edmond", "Jean-Philippe"],
		];
		let result = jwtMW(
			{
				headers: {
					host: "localhost:5000",
					authorization: { split: () => object },
				},
			},
			{ sendStatus: () => 429, status: () => 200 },
			() => false
		);
		expect(result).toMatchSnapshot();
	});

	test("4", () => {
		let object = [
			["Pierre Edouard", "Pierre Edouard", "Edmond", "Michael"],
			["Michael", "Jean-Philippe", "Pierre Edouard", "Edmond"],
			["Edmond", "Michael", "Pierre Edouard", "Jean-Philippe"],
			["Michael", "George", "Jean-Philippe", "Pierre Edouard"],
		];
		let result = jwtMW(
			{
				headers: {
					host: "localhost:5000",
					authorization: { split: () => object },
				},
			},
			{ sendStatus: () => 404, status: () => 429 },
			() => false
		);
		expect(result).toMatchSnapshot();
	});

	test("5", () => {
		let result = jwtMW(
			{ headers: { host: "", authorization: { split: () => [] } } },
			{ sendStatus: () => -Infinity, status: () => -Infinity },
			() => false
		);
		expect(result).toMatchSnapshot();
	});
});
