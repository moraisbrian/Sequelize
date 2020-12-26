const router = require("express").Router();
const vendedorController = require("./controllers/vendedorController");

router.get("/", (req, res) => res.send("Default Route"));

router.post("/vendedores", vendedorController.adicionarVendedor);
router.get("/vendedores", vendedorController.consultarVendedores);

module.exports = router;