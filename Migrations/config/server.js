const express = require("express");
const routes = require("../app/routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

module.exports = app;