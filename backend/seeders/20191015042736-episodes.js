'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'Kematian Jiraiya',
        image: "https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg",
        webtoon_id: 1
      },
      {
        title: 'Naruto vs Pain',
        image: "https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg",
        webtoon_id: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  }
};
