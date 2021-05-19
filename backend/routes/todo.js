const {Todo} = require('../models/todo')
const joi = require('joi')
const auth = require('../middleware/auth')
const express = require('express')
const { Schema } = require('mongoose')
const router = express.Router()
router.get('/',   async(req, res)=>{
    try{
 const todos = await Todo.find()
 .sort({date: -1})
 res.send(todos)
 console.log(req.user)
    } catch(error){
        res.status(500).send(error.message)
        console.log(error.message)
    }
}) 

router.post('/',  async (req, res)=> {
    const schema = joi.object({
        name : joi.string().min(3).max(200).required,
        author : joi.string().min(3).max(30),
        uid: joi.string(),
        iscomplete : joi.boolean(),
        date : joi.date()
    }).options({abortEarly : false})
    const {value , error} = schema.validate(req.body)
const {name , author , iscomplete, date , uid} =req.body

let todo = new Todo(
{
    name, author, iscomplete, date ,uid
}
)

try{
    todo =await todo.save()
    res.send(todo)
} catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
}
})
router.put('/:id',  async (req, res)=>{
    try{
    const schema = joi.object({
        name : joi.string().min(3).max(200).required,
        author : joi.string().min(3).max(30),
        uid: joi.string(),
        iscomplete : joi.boolean(),
        date : joi.date()
    }).options({abortEarly : false})
    const {value , error} = schema.validate(req.body)

    const {name , author , iscomplete, date , uid} =req.body
    const updatetodo = await Todo.findByIdAndUpdate(req.params.id , {name , author , iscomplete, date , uid}, {new : true})
} catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
}
})
router.patch('/',  async (req, res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id)
        const updatetodo = await Todo.findByIdAndUpdate(req.params.id,{
            iscomplete : !todo.iscomplete,
            
        })
        res.send(updatetodo);
    } catch(error){
        res.status(500).send(error.message)
        console.log(error.message)
    }
})
router.delete('/:id',  async(req, res)=>{
    try{
    const deletetodo = await Todo.findByIdAndDelete(req.params.id)
    res.send(deletetodo);
} catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
}
})
module.exports= router