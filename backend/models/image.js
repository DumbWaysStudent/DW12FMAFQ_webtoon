'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('images', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episode_id: DataTypes.INTEGER
  }, {});
  image.associate = function (models) {
    image.belongsTo(models.episodes, {
      as: 'episodeid',
      foreignKey: 'episode_id',
    });
  };
  return image;
};