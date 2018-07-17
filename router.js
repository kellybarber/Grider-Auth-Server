const passport = require('passport')
const authentication = require('./controllers/authentication')
const passportService = require('./services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = app => {
  app.post('/signup', authentication.signup)
}