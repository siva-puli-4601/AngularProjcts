const {checkEmployee,addEmployee}=require('../controllers/user')
const express=require('express');
const router=express.Router();
router.route("/register").post(addEmployee);
router.route("/login").post(checkEmployee);
module.exports=router;