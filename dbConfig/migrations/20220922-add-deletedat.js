"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("games", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn("inscriptions", "deletedAt", {
        allowNull: true,
        type: Sequelize.DATE
      });
      await queryInterface.addColumn("championships", "deletedAt", {
        allowNull: true,
        type: Sequelize.DATE
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.remveColumn("games");
    await queryInterface.remveColumn("inscriptions");
    await queryInterface.remveColumn("championships");
  }
};

