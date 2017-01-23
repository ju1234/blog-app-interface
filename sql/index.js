/**
 * 文件说明： mySql数据处理入口文件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5.
 */
var selectData = require('./selectData');
var insertData = require('./insertData');
var connect = require('./connect');
var updateData = require('./updateData')
var end = require('./end');


const mySql = {
  connect: connect,
  selectData: selectData,
  insertData: insertData,
  end: end,
  updateData: updateData
};


module.exports = mySql;


// mySql.connect().then(()=>{
//   return mySql.selectData(["*"],"user")
// }).then((msg)=>{
//   console.log(msg);
//   mySql.end();
// }).catch((s)=>{
//   console.log(s)
// });
