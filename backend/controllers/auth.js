const jwt = require('jsonwebtoken')
const models = require('../models')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = models.users

exports.login = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  User.findOne({ where: { email, password } }).then(user => {
    if (user) {
      const token = 'Bearer ' + jwt.sign({ userId: user.id }, 'my-secret-key')
      res.send({
        email,
        token
      })
    } else {
      res.send({
        error: true,
        message: "Email yang anda masukkan salah!"
      })
    }
  })
}

exports.register = (req, res) => {
  const email = req.body.email
  User.findOne({ where: { email } }).then(user => {
    if (user) {
      res.send({
        error: true,
        message: 'Email Sudah Terdaftar',
      })
    } else {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
          User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
          }).then(user => {
            const token = 'Bearer ' + jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
              data: user,
              token,
            })
          })
        });
      });
    }
  })
}
