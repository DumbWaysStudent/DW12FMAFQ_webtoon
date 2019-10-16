const models = require('../models')
const webtoon = models.webtoons;
const favourite = models.favourites;



exports.index = (req, res) => {
  webtoon.findAll().then(result => res.send(result));
}

exports.show = (req, res) => {
  webtoon.findOne({ where: { title: req.params.title } }).then(result => res.send(result))
}


exports.showFavourites = (req, res) => {
  favourite.findAll({ where: { user_id: req.params.id } }).then(result => res.send(result));
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