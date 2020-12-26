const express = require("express");
const routes = require("./app/routes");
const models = require("./app/models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

(async () => {
    await models.sequelize.sync();
})();

app.listen(3000, () => console.log("Server on"));