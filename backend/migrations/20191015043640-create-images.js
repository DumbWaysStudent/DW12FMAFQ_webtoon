'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      webtoon_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'episodes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      episode_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'episodes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images');
  }
};