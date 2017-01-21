/**
 * 文件说明： 断开连接
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5.
 */
var connection = require('./createConnect');

function end() {
  connection.end();
  console.log("断开连接");
}


module.exports = end;
