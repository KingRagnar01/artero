const express=require('express');
const con=require('../db');
const router = express.Router();
const adminController=require('../controller/admin');

router.get('/admin' ,adminController.allAdmin);
router.get('/admin/:id',adminController.adminById);
router.post('/admin',adminController.postAdmin);
router.delete('/admin/:id',adminController.deleteAdminById);

module.exports  = router;