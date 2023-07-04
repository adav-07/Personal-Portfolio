const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    mobile: {
        type:Number,
        required:true
    },
    designation: {
        type:String,
        required:true
    },
    github_url: {
        type:String,
        required:true
    },
    linkedin_url: {
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    },
    Projects:{
        type:Array,
        required:true
    },
    experience:{
        type:Array,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }

});

const User=mongoose.model("users",UserSchema)
module.exports=User 