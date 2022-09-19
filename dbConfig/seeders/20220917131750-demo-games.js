'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      //Add seed commands here.
     
      //Example:
      await queryInterface.bulkInsert('games', 
      
      [{
        name:'The Legend of Zelda - Ocarina Of Time',
        avaliable: true,
        plataform: 'Nintendo 64',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'The Legend of Zelda - Breath of The Wild',
        avaliable: true,
        plataform: 'Nintendo Switch',
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
