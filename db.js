const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'arterodb',
    multipleStatements:true
});
con.connect((err)=>{
    if(!err){
        console.log('DB connection success');
        var sql="select * from admin";
    }
    else
        console.log('DB connection failed\n error :'+JSON.stringify(err,undefined,2));
});

module.exports=con;
