/**
 * 文件说明： 数据更新
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/23
 */
let connection = require('./createConnect');

function updateData(value,type,id,table) {
  return new Promise((resolve,reject) => {
    const url = dataProcess(value,type,id,table)
    connection.query(url, function (err, res) {
      console.log(url);
      if (err) {
        console.log('修改失败');
        console.log(err);
        reject(err);
      }
      if (res) {
        console.log('修改成功');
        resolve(res);
      }
    });
  })
}

function dataProcess(value,type,id,table) {
  let url = `update ${table} set ${type}=`;
  switch (type) {
    case 'name':
    case 'phone':
    case 'address':
    case 'email':
    case 'sex':
      url += `\"${value}\" `;
      break;
    default:
      url += `${value} `;
  }
  url += `where ${table}.id=${id}`;
  return url;
}


module.exports = updateData;
