/**
 * 文件说明： 登录
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */
var mySql = require('../sql/index.js')

function login(app) {
        // 密码验证 并 返回用户信息
    app.post('/api/verifyPassword', (req, res) => {
        const {username, password} = req.body;
        //username 可能是用户名也可能是手机号

        mySql.selectData(["*", `user.name='${username}'`], "user")
            .then((msg) => {
                let info = JSON.parse(msg)[0];
                const realPassword = info.password;

                if (password === realPassword) {

                    delete info.password;
                    res.json(JSON.stringify({
                        msg: true,
                        info: info
                    }))
                } else {
                    res.json(JSON.stringify({msg: false}))
                }

            }).catch((s) => {
            res.json(JSON.stringify({msg: undefined}));
        });
    });
}

module.exports = login;