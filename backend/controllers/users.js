const models = require('../models')
const users = models.users;


exports.index = (req, res) => {
  users.findAll().then(result => res.send(result));
}

exports.show = (req, res) => {
  users.findOne({ where: { id: req.params.id } }).then(result => res.send(result))
}

exports.store = (req, res) => {
  users.create(req.body).then(users => {
    res.send({
      message: "success",
      users
    })
  })
}

exports.update = (req, res) => {
  users.update(
    req.body, { where: { id: req.params.id } }

  ).then(users => {
    res.send({
      message: "success",
      users
    })
  })
}

exports.delete = (req, res) => {
  users.destroy({ where: { id: req.params.id } }).then(users => {
    res.send({
      massage: 'success',
      users
    })
  })
}