const config = require('../../config/database');
const { Sequelize } = require('sequelize');

const Usuario = require('./Usuario');
const Produto = require('./Produto');

const sequelize = new Sequelize(config);

Usuario.init(sequelize);
Produto.init(sequelize);

module.exports = sequelize;