const models = require('../models')
const image = models.images;


exports.index = (req, res) => {
    image.findAll({
        where: {
            episode_id: req.params.episode_id
        }
    }).then(result => res.send(result));
}