const models = require('../models')
const user = models.users;


exports.index = (req, res) => {
  user.findAll().then(result => res.send(result));
}

exports.show = (req, res) => {
  user.findOne({ where: { id: req.params.id } }).then(result => res.send(result))
}

exports.store = (req, res) => {
  user.create(req.body).then(users => {
    res.send({
      message: "success",
      users
    })
  })
}

exports.update = (req, res) => {
  user.update(
    req.body, { where: { id: req.params.id } }

  ).then(users => {
    res.send({
      message: "success",
      user
    })
  })
}

exports.delete = (req, res) => {
  user.destroy({ where: { id: req.params.id } }).then(users => {
    res.send({
      massage: 'success',
      user
    })
  })
}