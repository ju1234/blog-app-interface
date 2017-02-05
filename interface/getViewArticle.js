/**
 * 文件说明： 获取文章查看页 文章数据
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */


var mySql = require('../sql');


function getViewArticle(app) {
  app.post('/api/getViewArticle',(req,res) => {
    mySql.selectData(['*',`article.id=\'${req.body.id}\'`],'article')
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


module.exports = getViewArticle;
