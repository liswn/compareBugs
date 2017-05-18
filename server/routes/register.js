 /**
 * Created by lwj on 2017/3/11.
 */
const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')

router.post("/submit",function (req,res,next) {
  console.log('req.body：', req.body);
  res.send({state: 'success'})
})

 module.exports = router
