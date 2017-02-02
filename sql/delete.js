/**
 * 文件说明： 数据删除
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/2
 */

let connection = require('./createConnect');
function deleteData(target, table) {
  return new Promise((resolve, reject) => {
    const url = dataProcessing(target, table);
    connection.query(url, function (err, res) {
      console.log(url);
      if (err) {
        console.log('删除失败');
        console.log(err);
        reject(err);
      }
      if (res) {
        console.log('删除成功');
        res = JSON.stringify(res);
        resolve(res);
        return res;
      }
    });
  })
}

// 查询语句处理
function dataProcessing(target, table) {
  let url = `delete from ${table} `;

  url += `where ${target}\;`;

  return url;
}

module.exports = deleteData;


// var mySql = require('../sql/index.js');
// let connection = require('./createConnect');
// mySql.connect()
// connection.query("insert into article value ('1x19','test11','asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',default,'ju',1,default);");
// mySql.end()
