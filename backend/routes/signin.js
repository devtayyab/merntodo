const joi = require('joi')
const {User} =require('../models/user')
const bycryp = require('bcrypt')
const express = require('express');
const jwt = require('jsonwebtoken');
 const router = express.Router();
require('dotenv').config()
 router.post('/', async(req, res)=>{
     const Schema = joi.object({
         name: joi.string().required().min(3),
         email : joi.string().required().email(),
         password : joi. string().required().min(6)
     })
     try{
        let user = await User.findOne({email: req.body.email})
        if (!user) return res.status(400).send("Invalid email and password")


        const validpassword=await bycryp.compare(req.body.password, user.password)
        if (!validpassword){
            res.status(400).send("Invalid email and password") 
        }
   const token=  jwt.sign({_id: user._id, name:user.name, email: user.email}, process.env.SECRET_KEY)
   res.send(token )
     }catch(error){
        res.status(400).send(error.message)
        console.log(error.message)
    }
    })
    module.exports = router