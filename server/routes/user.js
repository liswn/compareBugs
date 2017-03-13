/**
 * Created by lwj on 2017/3/9.
 */
const express = require('express')
const router = express.Router()

let UserModel = require('../models/user')

router.get('/', function (req, res, next) {
  UserModel.findUserByUserName('liwenjin1')
    .then(function (result) {
      res.send(result)
    })
})

router.get('/add', function(req, res, next) {
  let user = {
    name: 'liwenjin1',
    password: 'admin'
  }
  UserModel.create(user)
    .then(function (result) {
      res.send("插入成功")
    })
    .catch(function (e) {
      res.send("插入失败")
    })
})

module.exports = router
