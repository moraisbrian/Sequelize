const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/index");

class Produto extends Model {}

Produto.init({
    identificacao: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    quantidade: DataTypes.INTEGER
}, {
    sequelize,
    tableName: "Produtos"
});

module.exports = Produto;