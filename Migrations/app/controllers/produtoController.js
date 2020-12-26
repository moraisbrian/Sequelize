const Produto = require("../models/produto");

module.exports = {
    async adicionarProduto(req, res) {
        const { identificacao, valor, quantidade } = req.body;
        Produto.create({ identificacao, valor, quantidade })
            .then(result => res.json(result));
    }
}