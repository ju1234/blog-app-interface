/**
 * 文件说明： 删除文章
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/2
 */

var mySql = require('../sql/index.js');

function delAtc(app) {
  // 密码验证 并 返回用户信息
  app.post('/api/delAtc', (req, res) => {
    console.log(req.body.id);
    mySql.deleteData(`article.id='${req.body.id}'`,'article')
      .then(() => {
          res.json(JSON.stringify({
            msg: true
          }))
      })
  })
}

module.exports = delAtc;
