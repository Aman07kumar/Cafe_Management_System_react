const mongoose = require("mongoose");
//creating schema
const billSchema = mongoose.Schema(
    {
      customerName: {
        type: String,
        required: true,
      },
      customerNumber: {
        type: Number,
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
      subTotal: {
        type: Number,
        required: true,
      },
      tax: {
        type: Number,
        required: true,
      },
      paymentMode: {
        type: String,
        required: true,
      },
      cartItems:{
        type:Array,
        required:true,
      },
      date:{
        type: String, 
        default: () => new Date().toLocaleDateString('en-GB'),
      }
    },
    { timestamp: true }
  );
  
const Bills = mongoose.model("bills", billSchema);
  
module.exports = Bills;