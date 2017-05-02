
const React = require("react");

const CustomerFilterHeader = require('./CustomerFilterHeader');

const CustomerDash = React.createClass({

	render: function(){
		const hash = window.location.hash;
		const context = hash.slice(0, -(hash.length - hash.indexOf("?")));

		let header = "";

		if (context === "#/customer/customer-dashboard/filter-search")
  				header = <CustomerFilterHeader/>

		return(
			<div>
	      { header }
	      {this.props.children}
			</div>
		);
	}
});

module.exports = CustomerDash;
