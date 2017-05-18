const express = require('express')
const config = require('config-lite')
const cors = require('cors')
const pkg = require('../package')
const routes = require('./routes/index')

const app = new express()

//静态文件路径
app.use(express.static('static'))
app.use(cors({
  origin:['http://192.168.199.222:8080'],
  methods:['GET','POST'],
  alloweHeaders:['Conten-Type', 'Authorization']
}))

//请求头跨域
app.all('*', function(req, res, next) {
  next();
});

//路由
routes(app)

if (module.parent) {
  module.exports = app
} else {
  // 监听端口，启动程序
  app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`)
  });
}
