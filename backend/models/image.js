'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('images', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    webtoon_id: DataTypes.STRING,
    episode_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {});
  image.associate = function (models) {
    image.belongsTo(models.episodes, {
      as: 'webtoonid',
      foreignKey: 'webtoon_id',
    });

    image.belongsTo(models.episodes, {
      as: 'episodeid',
      foreignKey: 'episode_id',
    });

    image.belongsTo(models.users, {
      as: 'userid',
      foreignKey: 'created_by',
    });
  };
  return image;
};