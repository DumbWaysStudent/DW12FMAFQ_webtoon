'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourite = sequelize.define('favourites', {
    user_id: DataTypes.INTEGER,
    webtoon_id: DataTypes.INTEGER
  }, {});
  favourite.associate = function (models) {
    favourite.belongsTo(models.users, {
      as: 'userid',
      foreignKey: 'user_id',
    });

    favourite.belongsTo(models.webtoons, {
      as: 'webtoonid',
      foreignKey: 'webtoon_id',
    });
  };
  return favourite;
};