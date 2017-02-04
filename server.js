/**
 * 文件说明： server
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var login = require('./interface/login.js');
var register = require('./interface/reg.js');
var hasThisPhone = require('./interface/hasThisPhone.js');
var alterUserInfo = require('./interface/alterUserInfo.js');
var getArticle = require('./interface/getArticle.js');
var hitsAdd = require('./interface/hitsAdd.js');
var getViewArticle = require('./interface/getViewArticle.js');
var getMyArticle = require('./interface/getMyArticle.js');
var delAtc = require("./interface/delAtc.js");
var changeMyFavorite = require('./interface/changeMyFavorite.js');
var getMyFavoriteArticle = require('./interface/getMyFavoriteArticle.js');
var saveArticle = require('./interface/saveArticle.js')

var app = express();

var mySql = require('./sql/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname + '/static')));

// Additional middleware which will set headers that we need on each request.
app.use(function (req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

mySql.connect();

// 登录接口
login(app);
// 注册接口
register(app);
// 电话号码验证
hasThisPhone(app);
// 修改用户信息
alterUserInfo(app);
// 获取首页文章
getArticle(app);
// 文章点击量
hitsAdd(app);
// 获取文章查看页数据
getViewArticle(app);
// 获取我的文章
getMyArticle(app);
// 删除文章
delAtc(app);
// 我的收藏
changeMyFavorite(app);
// 获取我的收藏
getMyFavoriteArticle(app);
// 存储文章
saveArticle(app);


app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
