'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    favourite_count: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {});
  webtoon.associate = function (models) {
    webtoon.belongsTo(models.users, {
      as: 'userid',
      foreignKey: 'created_by',
    });
  };
  return webtoon;
};