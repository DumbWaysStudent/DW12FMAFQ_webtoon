const models = require('../models')
const webtoons = models.webtoons;


exports.index = (req, res) => {
    webtoons.findAll().then(result => res.send(result));
}

exports.show = (req, res) => {
    webtoons.findOne({ where: { id: req.params.id } }).then(result => res.send(result))
}

exports.store = (req, res) => {
    webtoons.create(req.body).then(webtoons => {
        res.send({
            message: "success",
            webtoons
        })
    })
}

exports.update = (req, res) => {
    webtoons.update(
        req.body, { where: { id: req.params.id } }

    ).then(webtoons => {
        res.send({
            message: "success",
            webtoons
        })
    })
}

exports.delete = (req, res) => {
    webtoons.destroy({ where: { id: req.params.id } }).then(webtoons => {
        res.send({
            massage: 'success',
            webtoons
        })
    })
}