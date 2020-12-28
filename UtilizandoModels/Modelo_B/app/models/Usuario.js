const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            Nome: DataTypes.STRING,
            Sobrenome: DataTypes.STRING,
            Email: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'Usuarios'
        });
    }
}

module.exports = Usuario;