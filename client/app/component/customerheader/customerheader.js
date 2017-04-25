const React = require("react");

const CustomerHeader = React.createClass({
	
	render: function(){
		return(
			<div className="header">
				<div className="headerCont">
					<h1>Insert Text Here</h1>
					<h3> blah blah blah blah description </h3>
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
				<img className="headerImg" src = "../public/links/food6.jpg"/>
			</div>
		);
	}
});

module.exports = CustomerHeader;