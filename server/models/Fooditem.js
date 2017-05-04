// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create Customer schema
var FooditemSchema = new Schema({
   itemName: {
    type: String,
    required: true    
  }, 
  itemDescription: {
    type: String,
    required: true
  },  
  price: {
    type: Number,
    required: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  cuisine: {
    type: String,
    required: true
  },
  quantity:{
    type:Number
  },
  vegetarian:{
    type:Boolean,
    default:false
  },
  stars:{
    totalRatings:{
      type:Number,
      default:0
    },
    average:{
    type: Number,
    default:0,
    min:0,
    max:5
    }
  },
  //not sure how to handle availability of the food item
  // available:{
  //   type:Date
  // },

  cook: {
    type: Schema.Types.ObjectId,
    ref: "Cook"
  }
  
   
});


// Create the Customer model with the CustomerSchema
var Fooditem = mongoose.model("Fooditem", FooditemSchema);

// Export the model
module.exports = Fooditem;
