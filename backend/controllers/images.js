const models = require('../models')
const detailimage = models.images;

exports.index = (req, res) => {
  detailimage.findAll({
    where: {
      episode_id: req.params.episode_id
    }
  }).then(result => res.send(result));
}

exports.store = (req, res) => {
  const user_id = req.params.id
  const webtoons_id = req.params.webtoon_id
  const episode_id = req.params.episode_id
  const {
    page,
    image
  } = req.body
  detailimage.create({
    page: page,
    image: image,
    webtoon_id: webtoons_id,
    episode_id: episode_id,
    created_by: user_id
  }).then(images => {
    res.send({
      images
    })
  })
}

exports.delete = (req, res) => {
  detailimage.destroy({
    where: {
      created_by: req.params.id,
      webtoon_id: req.params.webtoon_id,
      episode_id: req.params.episode_id,
      id: req.params.image_id
    }
  }).then(data => {
    res.send({
      data
    })
  })
}