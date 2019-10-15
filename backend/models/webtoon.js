'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    is_favourite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    favourite_count: DataTypes.INTEGER
  }, {});
  webtoon.associate = function (models) {
    // associations can be defined here

  };
  return webtoon;
};