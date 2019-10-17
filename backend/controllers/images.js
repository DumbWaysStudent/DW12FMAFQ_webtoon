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
  const id_webtoon = req.params.id
  const user = req.params.webtoon_id
  const episodes_id = req.params.episode_id
  const images = req.page.image.id
  images.destroy({
    where: {
      webtoon_id: id_webtoon,
      created_by: user,
      id: episodes_id
    }
  }).then(images => {
    res.send({
      data: [`id :${id_webtoon}`]
    })
  })
}