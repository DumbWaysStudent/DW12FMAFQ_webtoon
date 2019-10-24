const sequelize = require('sequelize')
const models = require('../models')
const webtoon = models.webtoons;
const favourite = models.favourites;
const user = models.users;
const Op = sequelize.Op;

exports.index = (req, res) => {
  webtoon.findAll().then(result => res.send(result));
}

exports.showFavourites = (req, res) => {
  favourite.findAll({
    where: {user_id: req.query.id},
    attributes: ['createdAt', 'updatedAt'],
    include: [
      {
        model: webtoon,
        as: 'webtoonid',
        attributes: ['title', 'genre', 'image'],
      },
      {
        model: user,
        as: 'userid',
        attributes: ['name'],
      },
    ],
  }).then(result => res.send(result));
}

exports.showAlltoon = (req, res) => {
  webtoon.findAll(
    req.body, {
    where: {
      user_id: req.params.id
    }
  }
  ).then(webtoons => {
    res.send({
      webtoons
    })
  })
}

exports.searchTitle = async (req, res) => {
  const searchkomik = await webtoon.findAll({
    where: {
      title: {
        [Op.like]: `%${req.params.title}%`
      }
    }
  })
  res.send(searchkomik)
}

exports.store = (req, res) => {
  webtoon.create(
    req.body, {
    where: {
      user_id: req.params.id
    }
  }
  ).then(webtoons => {
    res.send({
      webtoons
    })
  })
}

exports.update = (req, res) => {
  const id_webtoon = req.params.idwt
  const user = req.params.id
  webtoon.update(
    req.body, {
    where: {
      id: id_webtoon,
      created_by: user
    }
  }
  ).then(() => {
    res.send({
      ...req.body
    })
  })
}

exports.delete = (req, res) => {
  const id_webtoon = req.params.idwt
  webtoon.destroy({
    where: {
      id: id_webtoon
    }
  }).then(webtoons => {
    res.send({
      attributes: [`id :${id_webtoon}`]
    })
  })
}
