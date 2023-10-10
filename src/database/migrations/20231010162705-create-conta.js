'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      saldo: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      conta_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contas');
  }
};