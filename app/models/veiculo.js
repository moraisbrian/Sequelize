const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database/index");

class Veiculo extends Model {}

Veiculo.init({
  identificacao: DataTypes.STRING,
  marca: DataTypes.STRING,
  cor: DataTypes.STRING,
  ano: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Veiculo',
});

module.exports = Veiculo;
