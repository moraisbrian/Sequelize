import { QueryInterface, DataTypes } from 'sequelize';

export = {
    async up(queryInterface: QueryInterface) {
        return await queryInterface.createTable('Usuario', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            sobrenome: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        });
    },
    async down(queryInterface: QueryInterface) {
        return await queryInterface.dropTable('Usuario');
    }
}