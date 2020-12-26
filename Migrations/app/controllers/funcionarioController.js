const Funcionario = require("../models/funcionario");

module.exports = {
    async adicionar(req, res) {
        const { nome, email } = req.body;

        const funcionario = await Funcionario.create({ nome, email });

        res.json(funcionario);
    },

    async consultarTodos(req, res) {
        const funcionarios = await Funcionario.findAll();

        res.json(funcionarios);
    },

    async consultarPorId(req, res) {
        const id = req.params.id;
        const funcionario = await Funcionario.findByPk(id);
        res.json(funcionario);
    },

    async deletarPorId(req, res) {
        const id = req.params.id;
        const funcionario = await Funcionario.findByPk(id);
        funcionario.destroy()
            .then(() => res.json(id))
    },

    async atualizarPorId(req, res) {
        const id = req.params.id;
        const funcionarioAtualizacao = req.body;
        const funcionario = await Funcionario.findByPk(id);
        
        funcionario.update({ 
            nome: funcionarioAtualizacao.nome, 
            email: funcionarioAtualizacao.email
        }, {
            where: { id }
        })
        .then(result => res.json(result));
    }
}