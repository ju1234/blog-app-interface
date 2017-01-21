/**
 * 文件说明： 数据查询
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5.
 */
let connection = require('./createConnect');

function selectData(target,table) {
  return new Promise((resolve,reject)=>{
    const url = dataProcessing(target,table);
    connection.query(url,function (err,res) {
      if(err){
        console.log(err);
        reject(err);
      }
      if(res){
        res = JSON.stringify(res);
        resolve(res);
        return  res;
      }
    });
  })
}

// 查询语句处理
function dataProcessing(target,table) {
  let url = `select ${target[0]} from ${table} `;
  if(target[1]){
    url += `where ${target[1]}\;`;
  }else {
    url += `\;`;
  }

  return url;
}

module.exports = selectData;


