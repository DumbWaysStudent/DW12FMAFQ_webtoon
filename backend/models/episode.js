'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episodes', {
    title: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  episode.associate = function (models) {
    episode.belongsTo(models.webtoons, {
      as: 'webtoonId',
      foreignKey: 'webtoon_id',
    });
  };
  return episode;
};