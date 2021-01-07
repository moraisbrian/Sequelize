const { Model, DataTypes } = require('sequelize');

class Message extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Content: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Messages'
        });
    }
}

module.exports = Message;