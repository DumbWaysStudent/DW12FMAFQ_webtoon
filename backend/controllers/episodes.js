const models = require('../models');
const episode = models.episodes;
const webtoon = models.webtoons;

exports.index = (req, res) => {
    episode.findAll({
        where: {
            webtoon_id: req.params.webtoon_id,
        },
    }).then(episodes => res.send(episodes));
};

exports.showWebtoonEpisodes = (req, res) => {
    episode.findAll({
        where: {
            webtoon_id: req.params.webtoon_id
        },
        include: [{
            model: webtoon,
            as: 'webtoonId'
        }]
    }).then(episodes => res.send(episodes));
}