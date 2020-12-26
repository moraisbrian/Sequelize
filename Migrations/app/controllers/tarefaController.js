const Tarefa = require("../models/tarefa");

module.exports = {
    async criarTarefa(req, res) {
        const { titulo, conteudo, concluido } = req.body;
        Tarefa.create({ titulo, conteudo, concluido })
            .then(result => res.json(result));
    }
}