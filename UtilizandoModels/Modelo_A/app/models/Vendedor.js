const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Vendedor extends Model {}

    Vendedor.init({
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        }
    }, {
        sequelize,
        tableName: 'Vendedores'
    });
    
    return Vendedor;
}