// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var CookSchema = new Schema({
  
  address:{
    line1: {type: String, required: true},
    line2: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true}
  },  
  bio: {
    type: String,
    required: true
  },
  phone: {
    type: String,    
  }, 
  reviews:[{
    review:{type:String,required:true},
    customerName:{type:String,required:true}
  }], 
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
  fooditems: [{
    type: Schema.Types.ObjectId,
    ref: "Fooditem"
  }],
  user:{
     type: Schema.Types.ObjectId,
    ref: "User"
  }
});


// Create the cook model with the CookSchema
var Cook = mongoose.model("Cook", CookSchema);

// Export the model
module.exports = Cook;