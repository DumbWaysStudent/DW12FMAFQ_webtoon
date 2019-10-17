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
        page: 2,
        image: 'https://i2.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/11.jpg',
        episode_id: 1
      },
      {
        page: 3,
        image: 'https://i3.wp.com/www.komikid.com/uploads/manga/naruto/chapters/381/10.jpg',
        episode_id: 1
      },
      {
        page: 4,
        image: 'https://i0.wp.com/mangacanblog.com/mangas/naruto/381%20-%20Jiraya%20Vs%20Pain/16.jpg',
        episode_id: 1
      },
      {
        page: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPxQWeCwYL5V6RT6uPdgjtjbS5UYmmRztUhgxxs4l0w5J4-Sq',
        episode_id: 2
      },
      {
        page: 2,
        image: 'http://2.bp.blogspot.com/_wsbgR4r_Lxk/SaEOwubsd2I/AAAAAAAAAGw/EcsWjPAy5sQ/s400/16.jpg',
        episode_id: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
