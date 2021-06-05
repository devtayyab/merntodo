const jwt = require('jsonwebtoken')
require('dotenv').config()
function auth(req,res, next){
const token =req.header("x-auth-token")

if(!token) return res.status(401).send("not authorized")
try{
    const payload = jwt.verify(token, process.env.SECRET_KEY)
    req.user=payload
    next()
}
catch(error){
    res.status(400)
    res.send("please login First")
}
}
module.exports= auth