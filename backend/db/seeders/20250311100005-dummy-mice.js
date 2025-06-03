'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mice', [
      {
        name: "First Mouse",
        catId: 1,
        createdAt: "2025-03-10 14:43:52.062+00",
        updatedAt: "2025-03-10 14:43:52.062+00",
      },
      {
        name: "Second Mouse",
        catId: 1,
        createdAt: "2025-03-10 14:43:52.062+00",
        updatedAt: "2025-03-10 14:43:52.062+00",
      },
      {
        name: "Third Mouse",
        catId: 2,
        createdAt: "2025-03-10 14:43:52.062+00",
        updatedAt: "2025-03-10 14:43:52.062+00",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mice', null, {});
  }
};
