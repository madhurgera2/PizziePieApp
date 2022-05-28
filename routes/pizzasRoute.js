const express = require("express");
const router = express.Router();

const Pizza = require('../models/pizzaModel')

router.get("/getallpizzas",async(req,res)=>{
    try{
        const pizzas =await Pizza.find({})
        res.send(pizzas)
    } catch(error)
    {
        return res.status(400).json({message: error});
    }
});   
router.post("/addpizza",async(req,res)=>{
    const pizza =req.body.pizza
    try{
        const newPizza= new Pizza({
            name: pizza.name,
            image: pizza.link,
            varients: ['Small','Medium','Large'],
            category:pizza.category,
            prices:[pizza.prices]
        })
        await newPizza.save()
        res.status(201).send('newpizzaadded')
    } catch(error)
    {
        return res.status(400).json({message: error});
    }
});   
router.post("/getpizzabyid",async(req,res)=>{
    const pizzaId= req.body.pizzaId
    try{
        const pizza =await Pizza.findOne({_id:pizzaId})
        res.send(pizza)
    } catch(error)
    {
        return res.status(400).json({message: error});
    }
});   
router.post('/updatepizza',async(req,res)=>{
    const updatedPizza=req.body.updatedpizza
   try{
     const pizza=await Pizza.findOne({_id : updatedPizza._id})
    pizza.name=updatedPizza.name,
    pizza.image=updatedPizza.link,
    pizza.category=updatedPizza.category,
    pizza.prices=[updatedPizza.prices]
     await pizza.save()
    res.status(200).send('PizzaUpdateSuccess')
   }
   catch(error){
       res.status(400).json({message:error.stack})
   }})

   router.post("/deletepizza", async (req, res) => {
    const pizzaId = req.body.pizzaId;
    try {
      await Pizza.findOneAndDelete({ _id: pizzaId });
      res.status(200).send("Pizza Deleted");
    } catch (error) {
      res.status(404).json({ message: error.stack });
    }
  });
module.exports =router;
