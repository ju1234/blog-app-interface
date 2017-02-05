/**
 * 文件说明： 文章存储接口
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */


var mySql = require('../sql');

function saveArticle(app) {
  app.post('/api/saveArticle', (req, res) => {
    console.log(req.body);

    mySql.selectData(['id', `article.author_id=${req.body.author_id} order by time`], 'article')
      .then((data) => {
        if (JSON.parse(data).length === 0) {
          req.body.id = `${req.body.author_id}x1`;
        } else {
          const lastId = JSON.parse(data)[JSON.parse(data).length - 1].id;
          req.body.id = `${req.body.author_id}x${parseInt(lastId.split('x')[1]) + 1}`;
        }
        return mySql.insertData('article', req.body)
      })
      .then(() => {
        return mySql.selectData(['*', `article.id=\"${req.body.id}\"`], 'article')
      })
      .then((data) => {
        res.json(JSON.stringify({
          data: data
        }))
      })
      .catch((err) => {
        console.log(err)
      })

  })
  ;
}

module.exports = saveArticle;
