'use strict'

const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'invalide email provided'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'invalide password provided'
          })
          break
        default:
          res.status(400).send({
            error: 'invalide registration'
          })
      }
    } else {
      next()
    }
  }
}
