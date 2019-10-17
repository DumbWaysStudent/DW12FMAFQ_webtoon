const models = require('../models');
const episode = models.episodes;
const images = models.images;

exports.showWebtoonEpisodes = async (req, res) => {
    const webtonEpisode = await images.findAll({
        where: { episode_id: req.params.id },
        attributes: ['page', 'image', 'createdAt', 'updatedAt']
    })
    res.send(webtonEpisode);
}