const express = require("express");
const router = express.Router();

const funcionarioController = require("./controllers/funcionarioController");
const produtoController = require("./controllers/produtoController");
const tarefaController = require("./controllers/tarefaController");
const veiculoController = require("./controllers/veiculoController");

router.post("/funcionarios", funcionarioController.adicionar);
router.get("/funcionarios", funcionarioController.consultarTodos);
router.get("/funcionarios/:id", funcionarioController.consultarPorId);
router.delete("/funcionarios/:id", funcionarioController.deletarPorId);
router.put("/funcionarios/:id", funcionarioController.atualizarPorId);

router.post("/produtos", produtoController.adicionarProduto);

router.post("/tarefas", tarefaController.criarTarefa);

router.post("/veiculos", veiculoController.criarVeiculo);

module.exports = router;