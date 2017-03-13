/**
 * 文件说明： mySql实例创建
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: "ju1234",
  database: "my_blog",
  table: "user"
});


module.exports = connection;



