const User = require('../model/user')
const {v4:uuidv4} = require('uuid')
const {setUser} = require('../services/auth')


async function createUser(req,res){
    const {name, email,password} = req.body;
      
    await User.create( {
        name,
        email,  
        password
    })

   return res.render('index')
}

async function loginUser(req,res){
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email,password})
        
        if(!user){
            return res.render('login', {
                error: "User email or password is incorrect"
            })
        }
        const sessionId = uuidv4();
        
        setUser(sessionId,user)
        res.cookie("uid", sessionId)
        
        return res.render('index')
    }
    catch(e){
        
        return res.status(404).json("Not Found User")
    }
}

module.exports={
    createUser, loginUser
}