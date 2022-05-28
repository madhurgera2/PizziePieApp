const express= require('express')

const router = express.Router()

const {v4: uuidv4}= require('uuid')

const stripe=require('stripe')('sk_test_51L1oJgSAcF0NmIGsWsnOh5WmmgYOPis1Bz4VIvl5YKTCD3tfiz1G5WMsUOC3nY9FjLloA2mHJNha8wWgcJn1c4da00qn3825Mx')

const Order = require('../models/orderModel')
router.post('/placeorder',async (req,res)=>{
    const {token,total,currentUser,cartItems}= req.body
    try {
        const customer= await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const payment= await stripe.paymentIntents.create({
            amount:total*100,
            currency:'INR',
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey: uuidv4(),
        });
        
        if(payment)
        {
            
            const newOrder= new Order({
                name:currentUser.Name,
                email:token.email,
                userid:currentUser._id,
                orderItems:cartItems,
                orderAmount:total,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip,
                }
                // transactionId:payment.source.id
            });
            console.log("karrhah")

            newOrder.save();

            res.send("Payment Success");
            
            
        }
        else
        {
            res.send('Payment Failed')
        }
    } catch (error) {
        res.status(400).json({
            message:'Something went wrong',
            error:error.stack
        })
    }
})
router.post('/getuserorder', async(req,res)=>{
    
    const {userid}=req.body;
    try {
        const orders= await Order.find({userid})
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({message:"Something Went Wrong",error:error.stack})
    }
})
router.get("/getallorders",async(req,res)=>{
    try{
        const orders =await Order.find({})
        res.send(orders)
    } catch(error)
    {
        return res.status(400).json({message: error});
    }
}); 
router.post("/deliverorder", async (req, res) => {
    const orderid = req.body.orderid;
    try {
      const order = await Order.findOne({ _id: orderid });
      order.isDelivered = true;
      await order.save();
      res.status(200).send("Order deliverd success");
    } catch (error) {
      res.status(400).json({
        message: "Something Went Wront",
        error: error.stack,
      });
    }
  });
module.exports= router