const express=require('express');

const {registerAdmin,test}=require('../controllers/authController');
const router=express.Router();


router.get('/',test);
router.post('/register',registerAdmin);

module.exports=router;