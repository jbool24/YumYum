const React = require("react");
const axios = require('axios');

const CookHeader = React.createClass({
	getInitialState: function(){
		return {};
	},


	render: function(){
		const cook = this.props.cook;
		const address = `${cook.address.line1} ${cook.address.line2} ${cook.address.city}, ${cook.address.state} ${cook.address.zip}`
		return(
			<div className="cook-header">
				<div className="cook-headerCont">
					<div className="row cook-headerRow">
						<div className="col-md-3 cook-profImg">
							<a href="http://placehold.it"><img src="http://placehold.it/150x150"/></a>
						</div>
			  			<div className="col-md-9 cook-info">
			  				<h1>{cook.name}</h1>
								<p>{cook.bio}</p>
								<h5>{cook.phone}</h5>
			  				<h4>{address}</h4>
			  			</div>
					</div>
				</div>
				<div className="cook-overlayOpacity"></div>
				<img className="cook-headerImg" src="links/food6.jpg"/>
			</div>
		);
	}
});

module.exports = CookHeader;
