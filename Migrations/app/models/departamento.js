'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database/index");
const Funcionario = require('./funcionario');

class Departamento extends Model {}

Departamento.init({
  identificacao: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Departamento',
});

Departamento.hasMany(Funcionario);

module.exports = Departamento;