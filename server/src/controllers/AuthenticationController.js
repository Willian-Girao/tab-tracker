'use strict'
const { Users } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  let payload = {
    id: user.id,
    email: user.email
  }
  return jwt.sign(payload, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await Users.create(req.body)
      res.status(200).send({
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(400).send({
        message: error.errors[0].message
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await Users.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Invalid login credentials.'
        })
      }

      const validPass = await user.comparePassword(password)

      if (!validPass) {
        return res.status(403).send({
          error: 'Invalid login credentials.'
        })
      }

      res.status(200).send({
        token: jwtSignUser(user.toJSON()),
        user: {
          id: user.id,
          email: user.email
        }
      })
    } catch (error) {
      res.status(500).send({
        message: error.errors[0].message
      })
    }
  }
}
