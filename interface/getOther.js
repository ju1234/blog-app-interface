/**
 * 文件说明： 获取其他用户信息
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */

var mySql = require('../sql');


function getOther(app) {
  app.post('/api/getOther',(req,res) => {
    const auther_id = req.body.id;


    mySql.selectData(['*',`article.author_id=${auther_id}`],'article')
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


module.exports = getOther;
