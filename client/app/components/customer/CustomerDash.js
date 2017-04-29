
const React = require("react");

const CustomerFilterHeader = require('./CustomerFilterHeader');

const CustomerDash = React.createClass({

	render: function(){
		return(
			<div>
	      <CustomerFilterHeader />
	      {this.props.children}
			</div>
		);
	}
});
