/**
 * 文件说明： 修改用户信息
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */
var mySql = require('../sql');

function alterUserInfo(app) {
  // 密码验证 并 返回用户信息
  app.post('/api/alterUserInfo', (req, res) => {
    const {id,value,type} = req.body;
    mySql.updateData(value,type,id,'user')
      .then(() => {
        res.json(JSON.stringify({
          msg: true
        }))
      }).catch((s) => {
      // res.json(JSON.stringify({msg: undefined}));
    });
  });
}

module.exports = alterUserInfo;
