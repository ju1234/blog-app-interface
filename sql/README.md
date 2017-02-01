① 操作前手动连接数据库     mySql.connect();     !important!important!important!important

② 插入数据     mySql.insertData(a,b);
        a. 第一个参数为 表的名字 string类型
        b. 第二个参数为 需要插入的信息 obj类型
              user 用户信息表
             {
                id：xx,     numble
                name: xx,   string
                password: xx    string
             }

③ 查询数据     mySql.selectData(查询条件，表名)
        查询条件：obj类型
            [column,condition,distinct]
                column: string
                condition: "table.id in (1,2,3,4.....)"
                            "between x and x"
                            "table.id = x"
                            "table.name like '%x%'"
                distinct: true/false   去重

④ 操作结束手动关闭连接      mySql.end();       !important!important!important!important!important!important






调用示例
var newData = {
    id: 8,
    name: "hongong",
    password: "asdasdas"
};

mySql.connect().then(()=>{
    return mySql.insertData("user",newData);
}).then(()=>{
    return mySql.selectData("*","user");
    return mySql.selectData(["*","user.name not like 'a%'"],"user")
}).then((msg)=>{
    console.log(msg)
}).then(()=>{
    return mySql.selectData("id","user");
}).then((msg)=>{
    console.log(msg)
}).then(()=>{
    mySql.end();
}).catch((err)=>{
    console.log(err);
    mySql.end();
});

