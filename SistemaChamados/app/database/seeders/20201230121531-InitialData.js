'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subjects', [{
      Identification: 'Implantação',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Suporte',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Plantão',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Evaluations', [{
      Identification: 'Ruim',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Regular',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Bom',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Excelente',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Priorities', [{
      Identification: 'Baixa',
      Time: 10,
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Normal',
      Time: 7,
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Alta',
      Time: 5,
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Urgente',
      Time: 1,
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Situations', [{
      Identification: 'Em Andamento',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Finalizado',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Cancelado',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Status', [{
      Identification: 'Atrasado',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Atenção',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Identification: 'Normal',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Users', [{
      Name: 'Fulano',
      Email: 'fulano@contato.com',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Name: 'Ciclano',
      Email: 'ciclano@contato.com',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }, {
      Name: 'Deutrano',
      Email: 'deutrano@contato.com',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subjects', null, {});
    await queryInterface.bulkDelete('Evaluations', null, {});
    await queryInterface.bulkDelete('Priorities', null, {});
    await queryInterface.bulkDelete('Situations', null, {});
    await queryInterface.bulkDelete('Status', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
