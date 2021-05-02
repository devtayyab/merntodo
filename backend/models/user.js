const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
    name : {type: String , required: true },
    email: {
        type: String,
         required: true,
         unique :true,
          
    },
    password : {
        type: String, required : true, minlength: 6, maxlength : 215
    }
})
const User = mangoose.model("user" , userSchema)

exports.User =User