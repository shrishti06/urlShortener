const express = require('express')
const router = express.Router();
const URL = require('../model/url')
const {loginUser} = require('../controller/user')

router.route('/url').get(async(req,res)=> {
    if(!req.user) return res.render("login")
    const urls = await URL.find({createdBy: req.user._id})
    
    return res.render('index',{urls: urls})
}
)

router.route('/login')
.get((req,res)=>res.render('login'))

router.route('/signup')
.get((req,res)=>res.render('signup'))
module.exports = router

