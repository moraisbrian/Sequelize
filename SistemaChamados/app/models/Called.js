const { Model, DataTypes } = require('sequelize');

class Called extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            ClientId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ClerkId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ClosingRemarks: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'Calleds'
        });
    }
}

module.exports = Called;