const {getUser} = require("../services/auth")

async function restrictedToUser(req,res,next){
    const userUID = req.cookies.uid;
    if(!userUID){
        return res.redirect("/login")
    }
    const user = getUser(userUID)
    if(!user){
        return res.redirect("/login")
    }
    req.user = user;
    next();
}

async function checkAuth(req,res,next){
    const userUID = req.cookies.uid;
    const user = getUser(userUID)
    req.user = user;
    next();

}
module.exports = {restrictedToUser,checkAuth}