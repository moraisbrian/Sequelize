const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/index");
const Departamento = require("./departamento");

class Funcionario extends Model {}

Funcionario.init({
  nome: DataTypes.STRING(50),
  email: DataTypes.STRING(50),
  departamentoId: {
    type: DataTypes.INTEGER,
    references: {
      model: {
        tableName: "Departamentos"
      },
      key: "id"
    },
    allowNull: false
  }
}, {
  sequelize,
  tableName: "Funcionarios"
});

Funcionario.belongsTo(Departamento);

module.exports = Funcionario;