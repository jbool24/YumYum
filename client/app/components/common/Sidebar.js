// Include React
const React = require("react");
const helper = require('../../helper');

const Sidebar = React.createClass({
  
  getInitialState: function () {
    return {sidebarStatus: "sidebar-closed", cart: [], cartTotal: undefined };
  },

  componentWillMount: function () {

  },

  componentWillReceiveProps: function () {
    if (this.props.visible) {
      this.setState({sidebarStatus: "sidebar-open"})
    } else {
      this.setState({sidebarStatus: "sidebar-closed"})
    }
  },

  componentDidMount: function () {

    //Get items from req.session.cart
    helper.getCart().then((data) => {
      this.setState({ cart: data.cart, cartTotal: data.cartTotal });
    }).then( () => {
    //Creates stripe payment button
      var amount = this.state.cartTotal * 100
      var script = document.createElement("script")

      script.setAttribute("src", "https://checkout.stripe.com/checkout.js")
      script.setAttribute("class", "stripe-button")
      script.setAttribute("data-key", "pk_test_kWSuXV6D1USg0ziKSpne0TR9")
      script.setAttribute("data-amount", amount)
      script.setAttribute("data-name", "Demo Site")
      script.setAttribute("data-description", "Widget")
      script.setAttribute("data-image", "https://stripe.com/img/documentation/checkout/marketplace.png")

      document.getElementById('stripe-form').appendChild(script)
    });


  },

  getCart: function () {
    helper.getCart().then((data) => {
      this.setState({ cart: data.cart, cartTotal: data.cartTotal });
    })
  },

  handleAddItem: function (itemId) {
    helper.addItem(itemId)
      .then(() => this.getCart())
  },

  handleSubtractItem: function (itemId) {
    helper.subtractItem(itemId)
      .then(() => this.getCart())
  },

  handleDeleteItem: function (itemId) {
    helper.deleteItem(itemId)
      .then(() => this.getCart())
  },

  renderEmptyCart: function () {
    return (
      <div className={`emptycart-cont ${this.state.sidebarStatus}`}>
        <div className="row">
          <div className="col-md-12 text-center">
            <i className="fa fa-shopping-cart fa-5x" aria-hidden="true"></i>
            <h3>Your Cart is Empty!</h3>
          </div>
        </div>
      </div>
    )
  },

  renderCart: function () {
    let cart = this.state.cart;
    let amount = this.state.cartTotal * 100
    
    // console.log(cart);
    return (
      <div className={`fullcart-cont ${this.state.sidebarStatus}`}>
        <div className="row orderHeader">
            <div className="col-md-12 text-center">
              <h3>Your Order</h3>
              <hr/>
            </div>
        </div>
        {cart.map((items) => {
          return (
            <div key={items.item._id} className="row ordereditems-cart">
              <div className="col-md-1 removeItem">
                <div onClick={()=> this.handleAddItem(items.item._id)} className="clickable">
                          <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
                <div onClick={() => this.handleSubtractItem(items.item._id)} className="clickable">
                  <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </div>
              </div>

              <div className="col-md-1" id="quantityOrd">
                <p>{items.qty}</p>
              </div>

              <div className="col-md-7" id="itemName"ass="col-md-6" id="itemName">
                <p>{items.item.itemName}</p>
              </div>

              <div className="col-md-2" id="itemCost">
                <p>${items.price}</p>
              </div>

              <div className="col-md-1" id="deleteOrd">
                    <span onClick={() => this.handleDeleteItem(items.item._id)} className="clickable">
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
              </div>
          </div>
          )
        })}

       <div className="total-cont">
          <h4>Total</h4>
          <hr/>
          <div className="row totalInfo">
            <div className="col-md-3" id="totalOrd">
              <p>1</p>
              </div>

              <div className="col-md-3" id="totalCost">
                <p>$5.99</p>
              </div>

              <div className="col-md-3" id="totalTax">
                <p>0.79</p>
              </div>

              <div className="col-md-3" id="total">
                <p>$6.78</p>
              </div>
          </div>
        </div>

        <div className="row orderBtn-cont">
          <div className="col-md-12 text-center">
            <form action="/users/stripe-charge" method="POST" id="stripe-form">
              <input type="hidden" name="amount" value={`${amount}`}/>
              {/*Stripe Payment Button Gets Inserted Here*/}
            </form>
          </div>
        </div>

      </div>
    );



  },

  render: function () {
    if (!this.state.cart) {
      return (
        this.renderEmptyCart()
      )
    }
    return (
      this.renderCart()
    )
  }
});

// Export the component back for use in other files
module.exports = Sidebar;
