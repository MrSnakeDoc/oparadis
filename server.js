require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const bodySanitizer = require("./app/middlewares/bodySanitizer");
const router = require("./app/router.js");
const docs = require("./app/docs/");
// const cloudinary = require('cloudinary').v2

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

app.use(cors());

app.use(express.json());

// app.use(cloudinary.config({ 
// 	cloud_name : ' dhwbw94lc ' , 
// 	api_key : ' 356557216945446 ' , 
// 	api_secret : ' 2q-c8pOBe-v44i949m8kYQEJsTk ' ,
// 	secure : true 
//  }));

app.use(bodySanitizer);

app.use(router);

app.use((_, res) => {
	res.status(404).send("404 not found");
});

module.exports = app;
