const React = require("react");
const axios = require('axios');

const GenericHeader = React.createClass({
	render: function(){
		return(
			<div className="cook-header">
				<div className="cook-overlayOpacity"></div>
				<img className="cook-headerImg" src="links/food6.jpg"/>
			</div>
		);
	}
});

module.exports = GenericHeader;
