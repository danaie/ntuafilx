const express=require("express");

const userRegisterController = require('../controllers/userRegister');

const router=express.Router();

router.post('/', userRegisterController.createUser);

module.exports=router;