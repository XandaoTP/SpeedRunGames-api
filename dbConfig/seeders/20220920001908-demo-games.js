'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('games', 
     [
      {
       name: 'The Legend of Zelda',
       plataform: 'NES',
       ativo: true,
       createdAt: new Date(),
       updatedAt: new Date()
    },
    {
      name: 'The Legend of Zelda - OCARINA OF TIME',
      plataform: 'N64',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    name: 'The Legend of Zelda - THE BREATH OF THE WILD',
    plataform: 'NINTENDO SWITCH',
    ativo: true,
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
