const config = require('config-lite')
const Mongolass = require('mongolass')
const mongolass = new Mongolass()

mongolass.connect(config.mongodb)

exports.User = mongolass.model('User', {
  name: {type: 'string'},
  password: {type: 'string'}
})
exports.User.index({name: 1}, {unique: true}).exec()
