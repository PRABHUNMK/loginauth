const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique: true,  
        required:true,
    },
    num:{
        type:Number,
        required:true,
        minlength:10,
        maxlength: 10,
        unique:true
    }
});

const usermodel = mongoose.model("reguser",userschema);

module.exports=usermodel;