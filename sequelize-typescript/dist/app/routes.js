"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usuario_controller_1 = require("./controllers/usuario-controller");
const router = express_1.Router();
exports.router = router;
router.post('/usuario', usuario_controller_1.usuarioController.adicionar);
