const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const router = require("./app/router.js");
const docs = require("./app/docs/");
const { bodySanitizer } = require("./app/middlewares/");

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

app.use(cors());

app.use(express.json());

app.use(bodySanitizer);

app.use(router);

module.exports = app;
