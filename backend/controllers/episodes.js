const models = require('../models');
const episode = models.episodes;

exports.index = (req, res) => {
    episode.findAll({
        where: {
            webtoon_id: req.params.webtoon_id,
        },
    }).then(episodes => res.send(episodes));
};