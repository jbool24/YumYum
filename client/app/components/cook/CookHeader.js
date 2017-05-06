const React = require("react");

const CookHeader = React.createClass({

	render: function(){
		return(
			<div className="cook-header">
				<div className="cook-headerCont">
					<div className="row cook-headerRow">
						<div className="col-md-3 cook-profImg">
							<a href="http://placehold.it"><img className="cook-img" src="links/cook1-headshot.jpg"/></a>
						</div>
			  			<div className="col-md-9 cook-info">
			  				<h1>Restaurant Name</h1>
			  				<h4>161 Newkirk St, Jersey City, NJ 07305</h4>
			  				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam blandit ante at maximus. Vivamus odio ante, porttitor vitae gravida sodales, consectetur consectetur ante.</p>
			  			</div>
					</div>
				</div>
				<div className="cook-overlayOpacity"></div>
				<img className="cook-headerImg" src="links/kitchen.jpg"/>
			</div>
		);
	}
});

module.exports = CookHeader;
