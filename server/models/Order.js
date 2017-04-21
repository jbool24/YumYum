// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create Order schema
var OrderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },  
  cook: {
    type: Schema.Types.ObjectId,
    ref: "Cook"
  },
  fooditems:[{
    type: Schema.Types.ObjectId,
    ref: "Fooditem"
  }],
  createdOn: {
    type: Date,
    default: Date.now
  },
  orderCompleted:{
    type:Boolean,
    default:false
  },
  lastUpdated: {
   type: Date 
  },
  orderTotal:{
    type:Number,
    required:true
  }  
});


OrderSchema.methods.lastUpdatedDate=function(){
  this.lastUpdated = Date.now();
  return this.lastUpdated;
}

//write a method to calculate total cost for the order


// Create the Order model with the OrderSchema
var Order = mongoose.model("Order", OrderSchema);

// Export the model
module.exports = Order;