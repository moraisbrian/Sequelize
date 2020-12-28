'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Veiculos', [{
      identificacao: "Brasilha",
      marca: "Wolksvagen",
      cor: "Amarela",
      ano: 1970,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      identificacao: "Corsa",
      marca: "Wolksvagen",
      cor: "Preta",
      ano: 1998,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      identificacao: "Opala",
      marca: "Nissan",
      cor: "Azul",
      ano: 2020,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Veiculos', null, {});
  }
};
