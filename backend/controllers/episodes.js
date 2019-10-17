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
    episodes.create(
        req.body, { where: { webtoon_id: req.params.id } }
    ).then(webtoons => {
        res.send({
            webtoons
        })
    })
}