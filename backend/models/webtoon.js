'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    is_favourite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    favourite_count: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {});
  webtoon.associate = function (models) {
    // associations can be defined here

  };
  return webtoon;
};