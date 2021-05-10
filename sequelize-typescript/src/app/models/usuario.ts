import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface UsuarioAttributes {
    id: number;
    nome: string;
    sobrenome: string;
    email: string
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, "id"> { }

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
    public id!: number;
    public nome!: string;
    public sobrenome!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Usuario.init({
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
    }
}, {
    sequelize,
    tableName: "Usuario"
});

export { Usuario };