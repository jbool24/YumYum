// Include React
const React = require("react");

// Creating the Footer component
const MenuItem = React.createClass({
  getInitialState: function(){
    return this.state = {
      // isCook: true,
      // in here we can set up which kind of
      // menuItem cook's item or customer's item
      // A cook has edit buttons
      // A customer has add to order buttons
    };
  },
  // Add the item to cart
  handleAddToCart: function (item) {
    // call to DB to add item to customer order
  },
  handleRemoveItem: function (item){
    // call to DB to pop off item from cook items list
  },


  render: function() {
    const specialbutton = function(){
      // Create a buttton to use based on cook or customer
      // if (this.state.isCook) {
      //  return <button onClick={this.handleRemoveItem}> Remove Item </button>;
      // } else {
      //  return <button onClick={this.handleAddToCart}>Add Item</button>;
      // }
      //** for Demo return generic button **//
      return <button key={this.props.key} onClick={alert("you clicked the button")}> Click</button>;
    };
    return (
      <div className="container copy-style">
          <div className="row orders-body">
            <div className="orders text-center center-block row-margin-sm">Current menu</div>
              <div className="order-style">
                <div className="row">
                  <div className="col-sm-4 profile-img">
                    <img src="links/cook1.jpg" className="img-responsive"></img>
                  </div>
                  <div className="col-sm-8 text-left">
                    <h2>Menu Item - {this.props.name}</h2>
                    <p>This is a really delicious meal my mother made me when I was young. And now I get to cook it for you.</p>
                  { specialbutton }
                  </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
});

// Export the component back for use in other files
module.exports = MenuItem;
