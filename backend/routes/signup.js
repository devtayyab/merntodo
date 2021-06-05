const joi = require('joi')
const {User} =require('../models/user')
const bycryp = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const express = require('express')
 const router = express.Router();

 router.post('/', async(req, res)=>{
     const Schema = joi.object({
         name: joi.string().required().min(3),
         email : joi.string().required().email(),
         password : joi. string().required().min(6)
     })
 const {error} =    Schema.validate(req.body);
 
 if (error) return res.status(400).send(error.details[0].message)
try{
 let user = await User.findOne({email: req.body.email})
 if (user) return res.status(400).send("user email is already exist")
  const {name, email ,password} = req.body

  user = await new User({
      name , email , password
  })
  
  const salt=await new bycryp.genSalt(10)
  user.password= await  bycryp.hash(user.password, salt)
await user.save()
// res.send("user created" + user)
const token=     jwt.sign({_id: user._id, name:user.name, email: user.email}, process.env.SECRET_KEY)
res.send(token)
}catch(error){
    res.status(400).send(error.message)
    console.log(error.message)
}
 })
module.exports= router