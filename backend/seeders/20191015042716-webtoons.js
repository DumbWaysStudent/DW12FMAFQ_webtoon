'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'Kematian Jiraiya',
        genre: 'Action',
        image: 'https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg',
        favourite_count: 80,
        created_by: 1
      },
      {
        title: 'Naruto vs Pain',
        genre: 'Action',
        image: 'https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg',
        favourite_count: 75,
        created_by: 1
      },
      {
        title: 'Rapat Kage',
        genre: 'Action',
        image: 'https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg',
        favourite_count: 88,
        created_by: 1
      },
      {
        title: 'Itachi vs Sasuke',
        genre: 'Action',
        image: 'https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg',
        favourite_count: 90,
        created_by: 1
      },
      {
        title: 'Bangkitnya Madara',
        genre: 'Action',
        image: 'https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id',
        favourite_count: 90,
        created_by: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
