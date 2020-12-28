const Veiculo = require("../models/veiculo");

module.exports = {
    async criarVeiculo(req, res) {
        const { identificacao, marca, cor, ano } = req.body;
        const veiculo = await Veiculo.create({ identificacao, marca, cor, ano });
        res.json(veiculo);
    }
}