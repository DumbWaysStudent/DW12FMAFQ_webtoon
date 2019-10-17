const sequelize = require('sequelize')
const models = require('../models')
const webtoon = models.webtoons;
const favourite = models.favourites;
const Op = sequelize.Op;

exports.index = (req, res) => {
  webtoon.findAll().then(result => res.send(result));
}

exports.showFavourites = (req, res) => {
  favourite.findAll({ where: { user_id: req.params.id } }).then(result => res.send(result));
}

exports.showAlltoon = (req, res) => {
  webtoon.findAll(
    req.body, { where: { user_id: req.params.id } }
  ).then(webtoons => {
    res.send({
      webtoons
    })
  })
}

exports.cariJudul = async (req, res) => {
  const searchkomik = await webtoon.findAll({
    where: {
      title: { [Op.like]: `%${req.params.title}%` }
    }
  })
  res.send(searchkomik)
}

exports.store = (req, res) => {
  webtoon.create(
    req.body, { where: { user_id: req.params.id } }
  ).then(webtoons => {
    res.send({
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