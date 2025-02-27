const nano = require('nanoid')
const url = require('../model/url')

async function generateShortURl(req,res){
    const body = req.body;
    if(!body.url) {
        return res.status(404).json()
    }
    
    const shortId = nano.nanoid(8)
    await url.create( {
        shortId: shortId,
        redirectId: body.url,    
        visitHistory: [],
        createdBy: req.user._id
    })
     res.render('index', {id: shortId})
   // return res.status(201).json({id: shortId})
}

async function redirectURL(req,res){
    const shortId= req.params.url;
    if(!shortId) {
        return res.status(404).json()
    }

    const URL = await url.findOneAndUpdate( {
        shortId: shortId
    }, {
        $push: {
            visitHistory: {
                timeStamp : Date.now()
        
    },},})
    console.log(URL.redirectId);
    
    res.redirect(URL.redirectId)
}

async function analytics(req,res){
    const shortId= req.params.url;
    console.log(shortId);
    
    if(!shortId) {
        return res.status(404).json()
    }

    const URL = await url.findOne( {
        shortId: shortId
    })
    console.log(URL);
    
    return res.json
    ({totalClicks: URL.visitHistory.length,analytics: URL.visitHistory})
}

async function findAll(req,res){
   
    const urls = await url.find()
    return res.render('index', {urls})
}


module.exports={
    generateShortURl,redirectURL,analytics,findAll
}