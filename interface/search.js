/**
 * 文件说明： 搜索 接口
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */
var mySql = require('../sql');

function search(app) {
  app.post('/api/search', (req, res) => {
    const {value,reqCount} = req.body;
    let userList = [];
    let articleList = [];
    let hasMore = true;
    mySql.selectData(["name,id", `user.name like '%${value}%'`], 'user')
      .then((data) => {
        if (JSON.parse(data).length !== 0) {
          userList = JSON.parse(data);
          userList.map((user) => {
            user.name = user.name.replace(value, `<span class="cue">${value}</span>`);
          });
        }

        return mySql.selectData(
          ['title,content,id', `article.title like '%${value}%'`],
          'article'
        )
      })
      .then((data) => {
        articleList = [].concat(JSON.parse(data));
        return mySql.selectData(
          ['title,content,id', `article.content like '%${value}%'`],
          'article'
        )
      })
      .then((data) => {
        articleList = [].concat(JSON.parse(data));
        if (articleList.length > reqCount * 20) {
          articleList = articleList.slice((reqCount -1) * 20,reqCount * 20);
        }else {
          articleList = articleList.slice((reqCount -1) * 20,articleList.length - 1);
          hasMore = false;
        }
        articleList.map((article) => {
          article.title = article.title.replace(value, `<span class="cue">${value}</span>`);
          article.content = article.content.replace(value, `<span class="cue">${value}</span>`);
        });
        res.json(JSON.stringify({
          userList: userList,
          articleList: articleList,
          hasMore: hasMore
        }))
      })
      .catch((err) => {
        console.log(err)
      });

  })
}

module.exports = search;


// &lt;span class='cue'&gt;${req.body.value}&lt;/span&gt;
