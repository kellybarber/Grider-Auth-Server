const passport = require('passport')
const { signup, signin } = require('./controllers/authentication')
const passportService = require('./services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = app => {
  app.post('/signin', requireSignin, signin)
  app.post('/signup', signup)
}