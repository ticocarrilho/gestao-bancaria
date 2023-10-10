'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transacoes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      forma_pagamento: {
        type: Sequelize.CHAR(1),
        allowNull: false
      },
      valor: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      conta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'contas', key: 'id'}
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transacoes');
  }
};