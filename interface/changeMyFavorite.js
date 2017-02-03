/**
 * 文件说明： 修改我的收藏
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/3
 */

var mySql = require('../sql/index.js');

function changeMyFavorite(app) {
  // 密码验证 并 返回用户信息
  app.post('/api/changeMyFavorite', (req, res) => {
    const {id, msg, author_id} = req.body;

    var favorite = null;
    mySql.selectData(['favorite', `user.id=${author_id}`], 'user')
      .then((msg) => {
        favorite = JSON.parse(msg)[0].favorite.split(',');
      })
      .then(() => {
      if (msg === 'true') {
        // 取消收藏
        let index = null;
        favorite.map((favorite_id, i) => {
          if (favorite_id === id) {
            index = i;
          }
        });
        favorite.splice(index, 1);

      } else {
        // 新建收藏
        if(favorite.toString() === ''){
          favorite = [id];
        }else {
          favorite.push(id);
        }
      }
      return mySql.updateData(favorite.toString(), 'favorite', author_id, 'user')
    })
      .then(() => {
        return mySql.selectData(['*', `user.id=${author_id}`], 'user')
      })
      .then((data) => {
        let resData = JSON.parse(data)[0];
        delete resData.password;
        res.json(JSON.stringify({data: resData}))
      })
  })
}

module.exports = changeMyFavorite;
