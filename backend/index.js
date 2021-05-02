const express = require("express")
const  todo  = require('./routes/todo')
const SignUp = require('./routes/signup')
const SignIn = require('./routes/signin')
const app =express()
const cors= require('cors')
require('dotenv').config()
const mongoose = require("mongoose")
const port= process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api/todos', todo)
app.use('/api/signup', SignUp)
app.use('/api/signin', SignIn)
app.get("/", (req,res)=>{
    res.send("wellcome to server")
})
const conection_string = process.env.CONNECTION_STRING
app.listen(port, ()=>{
    console.log("server is running on port 5000")
})

mongoose.connect(conection_string,  {
    useNewUrlParser: true,
     useCreateIndex: true,
    useUnifiedTopology: true,})
.then(()=>{
    console.log("mongo db connect")
})
.catch((error) => console.log("conection failed" , error.message))