/**
 * Created by lwj on 2017/3/9.
 */
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/user')
  })
  app.use('/user', require('./user'))
  app.use('/register', require('./register'))
}
