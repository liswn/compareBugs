const User = require('../dao/mongo').User

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();
  },
  //根据用户名查询User
  findUserByUserName: function findUserByUserName(name) {
    return User.findOne({name: name}).exec();
  }
};
