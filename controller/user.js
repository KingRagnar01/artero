const con=require('../db');


const userRegister=(req,res)=>{
    let user=req.body;
    var sql="set @iduser=?;set @username=?;set @password=?;set @idaddr=?;set @address=?;set @phoneno=?;set @emailid=?;set @idcard=?;set @cardno=?;set @ccv=?;set @expirydate=?;call insertorupdateuser(@iduser,@username,@password,@idaddr,@address,@phoneno,@emailid,@idcard,@cardno,@ccv,@expirydate);";
    con.query(sql,[user.iduser,user.username,user.password,user.idaddr,user.address,user.phoneno,user.emailid,user.idcard,user.cardno,user.ccv,user.expirydate],(err,rows,fields)=>{
        if(!err){ 
            rows.forEach(element => {
                if(element.constructor==Array) res.status(200).send(element[0]);
            });
        }
        else throw err;
    });
};

const userLogin=(req,res)=>{
    let user=req.body;
    var sql="select iduser from usercredentials where username=? and password=?";
    con.query(sql,[user.username,user.password],(err,rows,field)=>{
        if(!err) {
            res.status(200).send(rows);
        }
        else throw err;
    });
};



module.exports={
    userLogin,
    userRegister
};