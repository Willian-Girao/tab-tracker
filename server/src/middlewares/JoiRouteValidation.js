'use strict'

const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{5,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid email provided.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Invalid password. It has to match the following rules:
            <br>
            1. it must contain only numbers and/or letters.
            <br>
            2. It must have length between 5 and 32 characters.
            `
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
