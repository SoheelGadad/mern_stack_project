const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    moblie:{
        type: String,
        required:true
    },
    Image:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    is_admin:{
        type: Number,
        required:true
    },
    is_varified:{
        type: Number,
        default:0
    }
});
//creating models
module.exports = mongoose.model('user',userSchema);