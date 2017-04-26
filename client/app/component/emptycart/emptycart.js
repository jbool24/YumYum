const React = require("react");

const EmptyCart = React.createClass({
	
	render: function(){
		return(
			<div className="emptycart-cont">
			  <div className="row">
			  	<div className="col-md-12 text-center">
			  		<i className="fa fa-shopping-cart fa-5x" aria-hidden="true"></i>
			  		<h3>Your Cart is Empty!</h3>
			  	</div>
			  </div>
			</div> 
		);
	}
});

module.exports = EmptyCart;