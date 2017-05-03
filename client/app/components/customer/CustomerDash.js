
const React = require("react");

const CustomerFilterHeader = require('./CustomerFilterHeader');
const CookHeader = require('../cook/CookHeader');

const CustomerDash = React.createClass({

	render: function(){
		const hash = window.location.hash;
		const context = hash.slice(0, -(hash.length - hash.indexOf("?")));

		let header = "";

		(context === "#/customer/customer-dashboard/filter-search")
  				? header = <CustomerFilterHeader/>
					: header = <CookHeader />

		return(
			<div>
	      { header }
	      {this.props.children}
			</div>
		);
	}
});

module.exports = CustomerDash;
