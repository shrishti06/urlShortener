const express = require('express')
const router = express.Router();
const URL = require('../model/url')
const {loginUser} = require('../controller/user')

router.route('/').get(async(req,res)=> {
    const urls = await URL.find({})
    console.log(urls);
    
    return res.render('home',{urls: urls})
}
)

router.route('/login')
.get((req,res)=>res.render('login'))
module.exports = router

