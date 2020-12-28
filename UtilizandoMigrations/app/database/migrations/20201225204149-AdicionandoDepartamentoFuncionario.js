'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Funcionarios", "departamentoId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Departamentos"
        },
        key: "id"
      },
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Funcionarios", "departamentoId", {});
  }
};
