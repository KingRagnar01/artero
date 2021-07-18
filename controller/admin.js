const con=require('../db');
const allAdmin=(req,res)=>{
    var sql="Select * from admin";
    con.query(sql,(err,rows,field)=>{
        if(!err)  res.send(rows);
        else throw err;
    });
};

const adminById=(req,res)=>{
    var sql='select * from admin where idadmin=?';
    con.query(sql,[req.params.id],(err,rows,field)=>{
        if(!err){
            res.send(rows);
            console.log(`recieved  id : ${req.params.id}`);
        }
        else throw err;
    });
};

const postAdmin=(req,res)=>{
    let admin=req.body;
    var sql="set @idadmin=?;set @username=?;set @password=?;set @emailid=?;set @phoneno=?;call insertorupdate(@idadmin,@username,@password,@emailid,@phoneno);";
    con.query(sql,[admin.idadmin,admin.username,admin.password,admin.emailid,admin.phoneno],(err,rows,field)=>{
        if(!err){
            rows.forEach(element => {
                if(element.constructor == Array) res.status(200).send(JSON.stringify(element));
            });
        }
        else throw err;  
    })
};

const deleteAdminById=(req,res)=>{
    var sql="delete from admin where idadmin=?";
    con.query(sql,[req.params.id],(err,rows,field)=>{
        if(!err) res.status(200).send(` ${req.params.id} row deleted successfully`);
        else throw err;
    });
};

module.exports={
    allAdmin,
    adminById,
    postAdmin,
    deleteAdminById
};