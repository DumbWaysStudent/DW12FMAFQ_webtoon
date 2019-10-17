'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episodes', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {});
  episode.associate = function (models) {
    episode.belongsTo(models.webtoons, {
      as: 'webtoonid',
      foreignKey: 'webtoon_id',
    });

    episode.belongsTo(models.users, {
      as: 'userid',
      foreignKey: 'created_by',
    });
  };
  return episode;
};