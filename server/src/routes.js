module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.json({
      message: 'hello world'
    })
  })

  app.post('/register', (req, res) => {
    res.status(200).send({
      message: 'user registered',
      user: req.body.email
    })
  })
}
