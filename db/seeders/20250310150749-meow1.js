'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cats', [
      {
        name: "First Meow",
        createdAt: "2025-03-10 14:43:52.062+00",
        updatedAt: "2025-03-10 14:43:52.062+00",
      },
      {
        name: "Second Meow",
        createdAt: "2025-03-10 14:44:52.062+00",
        updatedAt: "2025-03-10 14:44:52.062+00",
      },
      {
        name: "Third Meow",
        createdAt: "2025-03-10 14:45:52.062+00",
        updatedAt: "2025-03-10 14:45:52.062+00",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cats', null, {});
  }
};
