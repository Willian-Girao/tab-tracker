'use strict'
const { Users } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await Users.create(req.body)
      res.status(200).send(user.toJSON())
    } catch (error) {
      res.status(400).send({
        message: error.errors[0].message
      })
    }
  }
}
