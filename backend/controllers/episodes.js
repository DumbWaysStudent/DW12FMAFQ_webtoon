const models = require('../models');
const images = models.images;
const episodes = models.episodes;

exports.showWebtoonEpisodes = async (req, res) => {
  const webtonEpisode = await images.findAll({
    where: { episode_id: req.params.id },
    attributes: ['page', 'image', 'createdAt', 'updatedAt']
  })
  res.send(webtonEpisode);
}

exports.store = (req, res) => {
  const user_id = req.params.id
  const webtoons_id = req.params.idwt
  const { title, image } = req.body
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
  episodes.update(
    req.body, { where: { webtoon_id: req.params.id } }
  ).then(webtoons => {
    res.send({
      ...req.body
    })
  })
}

exports.update = (req, res) => {
  const id_episode = req.params.id
  const id_webtoon = req.params.idwt
  webtoon.update(
    req.body, { where: { id: id_episode, webtoon_id: id_webtoon } }
  ).then(() => {
    res.send({
      ...req.body
    })
  })
}