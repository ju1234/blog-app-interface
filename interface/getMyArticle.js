/**
 * 文件说明： 获取  我的文章 数据
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/2
 */


var mySql = require('../sql');


function getMyArticle(app) {
  app.post('/api/getMyArticle',(req,res) => {
    console.log(req.body.id);

    mySql.selectData(['*',`article.author_id=${req.body.id}`],'article')
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


module.exports = getMyArticle;
