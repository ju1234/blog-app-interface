/**
 * 文件说明： 注册接口
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */
var mySql = require('../sql/index.js')

function register(app){
    app.post('/api/reg', (req, res) => {
        let data = req.body;
        console.log(data);
        // data.id = 2;

        mySql.insertData('user',data)
            .then(() => {
                console.log(1)
            }).catch((s) => {
            res.json(JSON.stringify({msg: undefined}));
        });
    });
}

module.exports = register;