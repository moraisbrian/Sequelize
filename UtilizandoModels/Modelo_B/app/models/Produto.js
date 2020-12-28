const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            Identificacao: DataTypes.STRING,
            Valor: DataTypes.DECIMAL,
            Estoque: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'Produtos'
        });
    }
}

module.exports = Produto;