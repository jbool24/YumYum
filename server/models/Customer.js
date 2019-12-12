// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create fooditem schema
var CustomerSchema = new Schema({
  address: {
    line1: { type: String, required: true },
    line2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  phone: {
    type: String
  },
  order_history: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order"
    }
  ],
  current_basket: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order"
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// Create the Customer model with the CookSchema
var Customer = mongoose.model("Customer", CustomerSchema);

// Export the model
module.exports = Customer;
