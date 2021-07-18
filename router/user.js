const express=require('express');
const con=require('../db');
const router = express.Router();
const userController=require('../controller/user');


router.post('/api/user/register',userController.userRegister);
router.get('/api/user/login',userController.userLogin);


module.exports  = router;