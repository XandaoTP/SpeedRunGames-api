'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('championships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
        championships_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'games',
          key: 'id'
        }}
        ,
        user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'inscriptions',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('championships');
  }
};