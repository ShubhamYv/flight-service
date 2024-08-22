'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false, // DB level constraints
        autoIncrement: true, // DB level constraints
        primaryKey: true, // DB level constraints
        type: Sequelize.INTEGER
      },
      modelNumber: {
        type: Sequelize.STRING,
        allowNull: false // DB level constraints
      },
      capacity: {
        type: Sequelize.INTEGER,
        defaultValue: 0, // DB level constraints
        validate: {
          max: 1000,
        }
      },
      createdAt: {
        allowNull: false, // DB level constraints
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false, // DB level constraints
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};