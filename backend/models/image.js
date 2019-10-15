'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('images', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episode: DataTypes.INTEGER
  }, {});
  image.associate = function (models) {
    // associations can be defined here
  };
  return image;
};