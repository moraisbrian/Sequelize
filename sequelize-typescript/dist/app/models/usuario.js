"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Usuario extends sequelize_1.Model {
}
exports.Usuario = Usuario;
Usuario.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    sobrenome: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "Usuario"
});
