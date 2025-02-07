const nano = require('nanoid')
const User = require('../model/user')


async function createUser(req,res){
    const {name, email,password} = req.body;
      
    await User.create( {
        name,
        email,  
        password
    })

   return res.render('signup')
}

async function loginUser(req,res){
    const {email,password} = req.body;
    console.log(email, password)
    try{
        const user = await User.findOne({email,password})
         
        return res.redirect('/')
    }
    catch(e){
        return res.status(404).json("Not Found User")
    }
}

module.exports={
    createUser, loginUser
}