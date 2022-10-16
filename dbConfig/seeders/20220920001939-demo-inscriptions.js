'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('inscriptions', 
    [
      {
      name: 'Alexandre Afonso',
      email: 'contato@alexandreasilva.com.br',
      inscriptions_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'Joao Sem braço',
        email: 'contato@josb.com.br',
        inscriptions_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
  }], {});
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
