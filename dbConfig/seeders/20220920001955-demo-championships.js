'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('championships',
     [
      {
     name: 'Speed Run with bug',
     data_inicio: '2022-12-31',
     championships_id: 1,
     user_id: 1,
     createdAt: new Date(),
     updatedAt: new Date()  
     },
     {
      name: 'Speed Run without bug',
      data_inicio: '2022-12-31',
      championships_id: 2,
      user_id: 2,
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
