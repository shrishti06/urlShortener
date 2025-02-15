const mongoose = require('mongoose')

const url = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectId:{
        type: String,
        required: true,
        unique: true
    },
    visitHistory:[
        {timeStamp:{type: Number}}
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"

    },
    },
    
    {
        timestamps:true
    }  
)

const URL = mongoose.model('url', url)
module.exports = URL

