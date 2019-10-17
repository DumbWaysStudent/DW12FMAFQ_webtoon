'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'Kematian Jiraiya',
        image: "https://dreager1.files.wordpress.com/2012/02/jiraiya_killed_by_pain.jpg",
        webtoon_id: 1,
        created_by: 1
      },
      {
        title: 'Naruto vs Pain',
        image: "https://i.pinimg.com/originals/ef/4a/6f/ef4a6f97b3184a39859977511dc34bad.jpg",
        webtoon_id: 1,
        created_by: 1
      },
      {
        title: 'Rapat Kage',
        image: "https://d.wattpad.com/story_parts/179/images/1585520188369900607095857880.jpg",
        webtoon_id: 1,
        created_by: 1
      },
      {
        title: 'Itachi vs Sasuke',
        image: "https://i.ytimg.com/vi/o95fomzhCZo/maxresdefault.jpg",
        webtoon_id: 1,
        created_by: 2
      },
      {
        title: 'Bangkitnya Madara',
        image: "https://vignette.wikia.nocookie.net/naruto/images/6/63/Madara_targets_Tailed_Beasts.png/revision/latest?cb=20141216140857&path-prefix=id",
        webtoon_id: 2,
        created_by: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  }
};
