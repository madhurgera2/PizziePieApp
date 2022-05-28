const express = require("express");
const router = express.Router();

const User = require('../models/userModel')

router.post("/register",async(req,res)=>{
    const {name, email,address,phonenumber,username,password}= req.body
    const newUser= new User({name, email,address,phonenumber,username,password})
    try{
        newUser.save()
        res.send('User Registered Successfully')
    } catch(error)
    {
        return res.status(400).json({message: error});
    }
});   
router.post("/login", async (req, res) => {
    const { lemail, lpassword } = req.body;
    try {
      const user= await User.findOne({email:lemail});
      if(user.password===lpassword)
      {
        const currentUser = {
          Name: user.name,
          isAdmin: user.isAdmin,
          _id: user._id,
        }
      
        res.status(200).send(currentUser);}
       else {
        res.status(400).json({
          message: "Login Failed",
        });
      }}
     catch (error) {
      res.status(404).json({
        message: "Something Went wrong",
      });
    }
  });
  router.get('/getallusers' ,async(req,res)=>{
    try {
      const users =await User.find({});
      res.status(200).send(users)
    } catch (error) {
      res.status(404).json({message: error.stack})
    }
  })
  router.post("/deleteuser", async (req, res) => {
    const userId = req.body.userId;
    try {
      await User.findOneAndDelete({ _id: userId });
      res.status(200).send("User Deleted");
    } catch (error) {
      res.status(404).json({ message: error.stack });
    }
  });
module.exports =router;