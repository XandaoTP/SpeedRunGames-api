'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('AdminUsers', 
     [
      {
       name: 'Alexandre',
       email: 'contato@alexandreasilva.com.br',
       senha: 123456,
       createdAt: new Date(),
       updatedAt: new Date()
    },
 
  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
