
const express=require('express');
const bodyParser=require('body-parser');
const adminRoutes=require('./router/admin');
const userRoutes=require('./router/user');


var app=express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());





const port=process.env.port||8080;
app.listen(port,()=>console.log(`listening to ${port} ..`));
app.use('/',userRoutes);
app.use('/',adminRoutes);



