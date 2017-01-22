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
        let info = null,
            isPass = false,
            isUndefined = false;
        //username 可能是用户名也可能是手机号
        mySql.selectData(["*", `user.name='${username}'`], "user")
            .then((msg) => {
                return new Promise((resolve, rej) => {
                    if (JSON.parse(msg).length === 0) {
                        isUndefined = true;
                        resolve();
                    } else {
                        JSON.parse(msg).map((item, index) => {
                            if (item.password === password) {
                                isPass = true;
                                info = JSON.parse(msg)[index];
                                delete info.password;
                            }
                        });
                        if (isPass) {
                            res.json(JSON.stringify({
                                msg: true,
                                info: info
                            }));
                        } else {
                            resolve();
                        }
                    }
                })
            })
            .then(() => {
                return mySql.selectData(["*", `user.phone='${username}'`], "user")
            })
            .then((msg) => {
                if (JSON.parse(msg).length === 0 && isUndefined) {
                    res.json(JSON.stringify({msg: undefined}));
                } else {
                    JSON.parse(msg).map((item, index) => {
                        if (item.password === password) {
                            isPass = true;
                            info = JSON.parse(msg)[index];
                            delete info.password;
                        }
                    });
                    if (isPass) {
                        res.json(JSON.stringify({
                            msg: true,
                            info: info
                        }));
                    } else {
                        res.json(JSON.stringify({
                            msg: false
                        }))
                    }
                }

            })
            .catch((s) => {
                console.log('asd');
                res.json(JSON.stringify({msg: undefined}));
            });
    });
}

module.exports = login;