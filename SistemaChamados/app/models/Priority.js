const { Model, DataTypes } = require('sequelize');

class Priority extends Model {
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
            },
            Time: {
                type: DataTypes.DOUBLE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Priorities'
        });
    }
}

module.exports = Priority;