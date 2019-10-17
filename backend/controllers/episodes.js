const models = require('../models');
const images = models.images;
const episodes = models.episodes;

exports.showWebtoonEpisodes = async (req, res) => {
  const webtonEpisode = await images.findAll({
    where: {
      episode_id: req.params.id
    },
    attributes: ['page', 'image', 'createdAt', 'updatedAt']
  })
  res.send(webtonEpisode);
}

exports.allImagesEpisodes = (req, res) => {
  images.findAll({
    where: {
      created_by: req.params.id,
      webtoon_id: req.params.webtoon_id,
      episode_id: req.params.episode_id
    }
  }).then(result => res.send(result))
}

exports.store = (req, res) => {
  const user_id = req.params.id
  const webtoons_id = req.params.idwt
  const {
    title,
    image
  } = req.body
  episodes.create({
    title: title,
    image: image,
    webtoon_id: webtoons_id,
    created_by: user_id
  }).then(episodes => {
    res.send({
      webtoon_id: episodes.webtoon_id,
      title: episodes.title,
      image: episodes.image,
      created_by: episodes.user_id
    })
  })
}

exports.update = (req, res) => {
  const id_webtoon = req.params.id
  const user = req.params.webtoon_id
  const episodes_id = req.params.episode_id
  episodes.update(
    req.body, {
      where: {
        webtoon_id: id_webtoon,
        created_by: user,
        id: episodes_id
      }
    }
  ).then(() => {
    res.send({
      ...req.body
    })
  })
}

exports.delete = (req, res) => {
  const id_webtoon = req.params.id
  const user = req.params.webtoon_id
  const episodes_id = req.params.episode_id
  episodes.destroy({
    where: {
      webtoon_id: id_webtoon,
      created_by: user,
      id: episodes_id
    }
  }).then(episodes => {
    res.send({
      data: [`id :${id_webtoon}`]
    })
  })
}