'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'noorqidam@gmail.com',
        password: '123',
        name: 'Qidam'
      },
      {
        email: 'aa@a.com',
        password: 'aa',
        name: 'anonim'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
