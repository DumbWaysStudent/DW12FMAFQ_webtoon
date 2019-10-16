'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [
      {
        page: 1,
        image: 'https://i0.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/04.jpg',
        episode_id: 1
      },
      {
        page: 1,
        image: 'https://i2.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/11.jpg',
        episode_id: 1
      },
      {
        page: 1,
        image: 'https://i2.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/11.jpg',
        episode_id: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
