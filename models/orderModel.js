const mongoose= require('mongoose')

const orderSchema = mongoose.Schema({
    name: {
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:[true,'email required']
    },
    userid:{
        type:String,
        // required:true
    },
    orderItems:[],
    shippingAddress:{
        type:Object
    },
    orderAmount:{
        type:String,
        // required:true
    },
    isDelivered:{
        type:Boolean,
        default:false
        // required:true
    },
    transactionId:{
        type:String,
        // required:true
    }
},{
    timestamps:true
})
const orderModel = mongoose.model('order', orderSchema)
module.exports =orderModel ;