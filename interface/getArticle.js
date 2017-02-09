/**
 * 文件说明： 首页获取文章信息
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

var mySql = require('../sql');


function getArticle(app) {
  app.post('/api/getArticle', (req, res) => {
    const reqCount = req.body.reqCount;
    console.log(reqCount)
    mySql.selectData('*', 'article')
      .then((data) => {
        let dataArr = JSON.parse(data);
        if (dataArr.length > 20 * reqCount) {
          res.json(JSON.stringify({
            data: JSON.stringify(dataArr.slice((reqCount - 1) * 20, reqCount * 20))
          }))
        } else {
          res.json(JSON.stringify({
            data: JSON.stringify(dataArr.slice((reqCount - 1) * 20, dataArr.length - 1))
          }))
        }

      })
      .catch((err) => {
        console.log(err)
      })
  })
}


module.exports = getArticle;
