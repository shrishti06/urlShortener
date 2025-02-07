const express = require('express')
const router = express.Router();
const URL = require('../model/url')

router.route('/').get(async(req,res)=> {
    const urls = await URL.find({})
    return res.render('index',{urls: urls})
}
)
module.exports = router

