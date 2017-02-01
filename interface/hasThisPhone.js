/**
 * 文件说明： 验证手机号码是否注册
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */
var mySql = require('../sql/index.js');

function hasThisPhone(app) {
  // 密码验证 并 返回用户信息
  app.post('/api/hasThisPhone', (req, res) => {
    const {field, phone} = req.body;
    console.log(field, phone);

    mySql.selectData([field], "user")
      .then((msg) => {
        const msgArr = JSON.parse(msg);
        msgArr.map((item) => {
          if (item.phone === phone) {
            res.json(JSON.stringify({
              msg: '该手机号已注册',
              isPass: false
            }))
          } else {
            res.json(JSON.stringify({
              msg: '验证通过',
              isPass: true
            }))
          }
        });


      }).catch((s) => {
      // res.json(JSON.stringify({msg: undefined}));
    });
  });
}

module.exports = hasThisPhone;
