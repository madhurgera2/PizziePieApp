const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
   name:{type: String,require},
   email:{type: String,require},
   address:{type: String,require},
   username:{type: String,require},
   password:{type: String,require},
   phonenumber:{type: Number,require},
   isAdmin:{type: Boolean,require, default:false},
},{
   timestamps:true,
})

const userModel = mongoose.model('users', userSchema)
module.exports =userModel ;