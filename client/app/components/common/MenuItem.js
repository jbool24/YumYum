// Include React
const React = require('react');
const axios = require('axios');

// Creating the Footer component
const MenuItem = React.createClass({
  getInitialState: function(){
    return { };
  },
  // Add the item to cart
  handleAddToCart: function (item) {
    // call to DB to add item to customer order
    axios.get("/cart/add-item/"+ item)
    .then(() => {
      alert("Added To Cart")
    }).catch(err => console.log(err))
  },

  handleRemoveItem: function (item) {
    // call to DB to pop off item from cook items list
  },

  render: function() {

    return (

        <div className = "row row-margin-sm">
          <div className="col-sm-4 profile-img">
            <img src={this.props.img} className="img-responsive"></img>
          </div>
          <div className="order-style">
            <div className="col-sm-8 text-left">
              <h2>{this.props.name}</h2>
              <p>{this.props.cusine}</p>
              <p>{this.props.description}</p>
              <p>${this.props.price}.00</p>
              <button onClick={() => this.handleAddToCart(this.props.itemID)}>Add One To Cart</button>
            </div>
          </div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = MenuItem;
