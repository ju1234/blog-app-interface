/**
 * 文件说明： 获取  我的收藏 数据
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/2
 */


var mySql = require('../sql');


function getMyFavoriteArticle(app) {
  app.post('/api/getMyFavorite',(req,res) => {
    console.log(req.body.favorite);

    const url = dataProcess(req.body.favorite);
    mySql.selectData(['*',url],'article')
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

function dataProcess(favorite) {
  const favoriteArr = favorite.split(',');
  let url = `article.id in (`;
  favoriteArr.map((item) => {
    url += `\"${item}\",`
  });

  return url.substring(0,url.length -1 ) + ')';
}

module.exports = getMyFavoriteArticle;
