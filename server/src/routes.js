const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.json({
      message: 'hello world'
    })
  })

  app.post('/register', (req, res) => {
    AuthenticationController.register(req, res)
  })
}
