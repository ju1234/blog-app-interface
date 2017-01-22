/**
 * 文件说明： 数据插入
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5.
 */
let connection = require('./createConnect');

function insertData(tableName, info) {
  return new Promise((resolve, reject) => {
    info = dataProcessing(info);
    let url = `insert into ${tableName} (${info.key}) value( ${info.value});`;
    console.log(url);
    connection.query(url, function (err, res) {
      if (err) {
        console.log("插入失败");
        reject(err)
      }
      if (res) {
        console.log("插入成功");
        resolve();
      }
    });
  })
}

// 插入信息处理
function dataProcessing(obj) {
  let value = [];
  let keyArr = [];
  for (let key in obj) {
    switch (typeof obj[key]) {
      case "number":
        keyArr.push(key)
        value.push(obj[key]);
        break;
      case "string":
        keyArr.push(key)
        value.push("\"" + obj[key] + "\"");
    }
  }

  const info = {
    key: keyArr.join(','),
    value: value.join(',')
  };

  return info;
}

module.exports = insertData;


// var a = {
//     id: 3,
//     name:'asd',
//     password: 'asfaasfa',
// };
//
//
// insertData("user",a)
//     .then(()=>{
//         console.log("sadasdasd")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//




