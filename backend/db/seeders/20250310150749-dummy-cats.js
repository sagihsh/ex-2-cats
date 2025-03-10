'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cats', [
      {
        name: "First Meow",
        image: "https://www.cats.org.uk/media/13136/220325case013.jpg?width=500&height=333.49609375",
        description: "I'm the first cat",
        createdAt: "2025-03-10 14:43:52.062+00",
        updatedAt: "2025-03-10 14:43:52.062+00",
      },
      {
        name: "Second Meow",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        description: "I'm the second cat",
        createdAt: "2025-03-10 14:44:52.062+00",
        updatedAt: "2025-03-10 14:44:52.062+00",
      },
      {
        name: "Third Meow",
        image: "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/51_afi_article1_the-secret-language-of-cats.png",
        description: "I'm the third cat",
        createdAt: "2025-03-10 14:45:52.062+00",
        updatedAt: "2025-03-10 14:45:52.062+00",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cats', null, {});
  }
};
