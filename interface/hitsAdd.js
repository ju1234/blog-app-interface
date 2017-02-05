/**
 * 文件说明： 点击量+1
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */
var mySql = require('../sql');

function hitsAdd(app) {
  app.post('/api/hits',(req,res) => {
   // console.log(req)/
    console.log(req.body)
    mySql.selectData(['hits',`article.id=\"${req.body.id}\"`],'article')
      .then((data) => {
        return mySql.updateData(JSON.parse(data)[0].hits+1,'hits',`\'${req.body.id}\'`,'article')
      })
      .then(() => {
        res.json(JSON.stringify({
          msg: true
        }))
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

module.exports = hitsAdd;
