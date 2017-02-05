/**
 * 文件说明： 首页获取文章信息
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

var mySql = require('../sql');


function getArticle(app) {
  app.post('/api/getArticle',(req,res) => {
    mySql.selectData('*','article')
      .then((data) => {
        res.json(JSON.stringify({
          data: data
        }))
      })
      .catch((err) => {
        console.log(err)
      })
  })
}


module.exports = getArticle;
