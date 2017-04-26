const React = require("react");

const FullCart = React.createClass({
	
	render: function(){
		return(
			<div className="fullcart-cont">
				<div className="row orderHeader">
				  	<div className="col-md-12 text-center">
				  		<h3>Your Order</h3>
				  		<hr/>
				  	</div>
				</div>

				<div className="row ordereditems-cart">
				  	<div className="col-md-1 removeItem">
				  		<i className="fa fa-minus-circle" aria-hidden="true"></i>
				  	</div>

				  	<div className="col-md-1" id="quantityOrd">
				  		<p>1</p>
				  	</div>

				  	<div className="col-md-7" id="itemName">
				  		<p>Blah Blah Blah</p>
				  	</div>

				  	<div className="col-md-3" id="itemCost">
				  		<p>$5.99</p>
				  	</div>
				</div>
				
				<div className="row orderBtn-cont">
					<div className="col-md-12 text-center">
					<hr/>
					<button type="submit" className="btn btn-default checkout-btn">Proceed To Checkout</button>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = FullCart;