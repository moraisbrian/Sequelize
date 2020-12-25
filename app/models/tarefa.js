const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database/index");

class Tarefa extends Model {}

Tarefa.init({
  titulo: DataTypes.STRING,
  conteudo: DataTypes.STRING,
  concluido: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Tarefa',
});

module.exports = Tarefa;