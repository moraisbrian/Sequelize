module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Identificacao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Valor: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'Produtos'
    });
    return Produto;
}