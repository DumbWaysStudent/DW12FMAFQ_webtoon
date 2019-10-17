const sequelize = require('sequelize')
const models = require('../models')
const webtoon = models.webtoons;
const favourite = models.favourites;
const user = models.users;
const Op = sequelize.Op;

exports.showAllToon = async (req, res) => {
  if (req.query.title) {
    const allToon = await webtoon.findAll({
      where: { title: req.query.title },
      include: [
        {
          model: user,
          as: 'createdBy',
          attributes: ['name'],
        }
      ],
    })
    res.send(allToon)
  } else {
    const allToon = await webtoon.findAll({
      include: [
        {
          model: user,
          as: 'createdBy',
          attributes: ['name'],
        }
      ],
    })
    res.send(allToon);
  };
}

exports.showFavourites = async (req, res) => {
  const fav = await favourite.findAll({
    where: { user_id: req.query.id },
    attributes: ['createdAt', 'updatedAt'],
    include: {
      model: webtoon,
      as: 'webtoonid',
      attributes: ['title', 'genre', 'image']
    }
  })
  res.send(fav);
}

exports.searchTitle = async (req, res) => {
  const searchkomik = await webtoon.findAll({
    where: {
      title: { [Op.like]: `%${req.params.title}%` }
    }
  })
  res.send(searchkomik)
}

exports.store = (req, res) => {
  webtoon.create(req.body).then(webtoons => {
    res.send({
      message: "success",
      webtoons
    })
  })
}

exports.update = (req, res) => {
  webtoon.update(
    req.body, { where: { id: req.params.id } }
  ).then(webtoons => {
    res.send({
      message: "success",
      webtoon
    })
  })
}

exports.delete = (req, res) => {
  webtoon.destroy({ where: { id: req.params.id } }).then(webtoons => {
    res.send({
      massage: 'success',
      webtoon
    })
  })
}