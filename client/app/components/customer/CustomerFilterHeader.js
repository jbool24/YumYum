
const React = require("react");

const CustomerFilterHeader = React.createClass({

	render: function(){
		return(
			<div className="header">
				<div className="headerCont">
					<h1>Find authentic cuisines nearby!</h1>
					<form className="navbar-form">
				        <div className="form-group">
				          <input type="text" className="form-control address-form" placeholder="&#xf124; City, State or Zip Code"/>
				        </div>
				        <div className="form-group ">
				          <input type="text" className="form-control cuisine-form" placeholder="&#xf1b1; Japanese, American, e.g."/>
				        </div>
				        <button type="submit" className="search-btn btn btn-default">&#xf002; Submit</button>
				      </form>
				</div>
				<div className="overlayOpacity"></div>
				<img className="headerImg" src ="links/cust-header-img.jpg"/>
			</div>
		);
	}
});

module.exports = CustomerFilterHeader;
