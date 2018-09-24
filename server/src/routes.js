const AuthenticationController = require('./controllers/AuthenticationController')
const JoiRouteValidation = require('./middlewares/JoiRouteValidation')

module.exports = (app) => {
  app.post('/register',
    JoiRouteValidation.register,
    AuthenticationController.register
  )
}
