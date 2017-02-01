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
register(app);
hasThisPhone(app);
alterUserInfo(app);
getArticle(app);
hitsAdd(app);

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
