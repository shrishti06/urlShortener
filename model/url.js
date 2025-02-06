const mongoose = require('mongoose')

const url = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectId:{
        type: String,
        required: true
    },
    visitHistory:[
        {timeStamp:{type: Number}}
    ]},
    {
        timestamps:true
    }  
)

const URL = mongoose.model('url', url)
module.exports = URL

