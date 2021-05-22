const mongoose = require('mongoose')
mongoose.set('useFindAndModify', true);
const todoSchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3, maxlength: 200},
    author : String,
    uid :String, 
    iscomplete : Boolean,
    date: {type : Date , default : new Date()}
})

const Todo = mongoose.model("Todo", todoSchema);


exports.Todo = Todo;