/**
 * 文件说明： 创建连接
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5.
 */
var connection = require('./createConnect');

function connect() {
  return new Promise((resolve,reject)=>{
    connection.connect(function (err,res) {
      if(err){
        console.error("连接失败");
        reject();
      }else {
        console.log("连接成功");
        resolve();
      }
    });
  })
}


module.exports = connect;


