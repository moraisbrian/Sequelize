const { Model, DataTypes } = require('sequelize');

class Status extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Identification: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        }, {
            sequelize,
            tableName: 'Status'
        });
    }
}

module.exports = Status;