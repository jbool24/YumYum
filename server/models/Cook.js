// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var CookSchema = new Schema({
  

  name: {
    // Keep firstName delete fullName
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    unique:true
  },
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
  username: {
    type: String,
    required: true,    
    unique:true
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
  photo: {
   data: Buffer, 
   contentType: String
  },
  fooditems: [{
    type: Schema.Types.ObjectId,
    ref: "Fooditem"
  }]
});


// Create the cook model with the CookSchema
var Cook = mongoose.model("Cook", CookSchema);

// Export the model
module.exports = Cook;