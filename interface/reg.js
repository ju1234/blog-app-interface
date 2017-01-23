/**
 * 文件说明： 注册接口
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */
var mySql = require('../sql/index.js')

function register(app) {
  app.post('/api/reg', (req, res) => {
      let data = req.body;
      console.log(data);
      data.id = parseInt(Math.random() * 1000);


      mySql.selectData(['id'], 'user').then((msg) => {
        let idArr = JSON.parse(msg);
        data.id = idArr[idArr.length - 1].id+1;
        console.log(data)
      }).then(() => {
        return mySql.insertData('user', data)
      }).then(() => {
        //插入成功
        res.json(JSON.stringify({msg: true}))
      }).catch((s) => {

        res.json(JSON.stringify({msg: undefined}));
      });
    }
  )
  ;
}

module.exports = register;
