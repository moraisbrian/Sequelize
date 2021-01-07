const { Model, DataTypes } = require('sequelize');

class Situation extends Model {
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
            tableName: 'Situations'
        });
    }
}

module.exports = Situation;