const database = require("../models");

module.exports = {
    async adicionarVendedor(req, res) {
        const { Nome, Sobrenome, Email } = req.body;
        const retorno = await database.sequelize.models.Vendedor.create({ Nome, Sobrenome, Email });
        res.json(retorno);
    },

    async consultarVendedores(req, res) {
        database.sequelize.models.Vendedor.findAll()
            .then(result => res.json(result));
    }
}