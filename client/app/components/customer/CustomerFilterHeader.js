const React = require("react");
const SvgAnim = require("../common/SvgAnim")

const CustomerFilterHeader = React.createClass({
	getInitialState: function() {
		return {
			cuisine: '',
			location: '',
		};
	},

	handleChange: function(event){
		if (event.target.name === "CityStateZip") {
			this.setState({location: event.target.value });
		} else if ( event.target.name === "Cuisine") {
			this.setState({cuisine: event.target.value });
		}
	},

	formSubmit: function(){
		const query = { location: this.state.location, cuisine: this.state.cuisine }
		this.props.formHandler(query);
	},

	render: function(){
		return(
			<div className="header">
				<div className="headerCont">

					<SvgAnim />
					<h1>Search For Some Food</h1>

					<form className="navbar-form">
				        <div className="form-group">						 
							  <select className="form-control cuisine-form" 
							  		  name="Cuisine"
									  onChange={this.handleChange} 
									  placeholder="&#xf1b1; Japanese, American, e.g."
							  >
									<option value="Indian">Indian</option>
									<option value="Italian">Italian</option>
									<option value="Global">Global</option>
							  </select>
				        </div>
				        <div className="form-group">
							<input type="text"
								   name="CityStateZip"
								   onChange={this.handleChange}
								   className="form-control address-form"
								   placeholder="&#xf124; City, State or Zip Code"/>
				        </div>
						<button type="button" onClick={() => this.formSubmit()} className="search-btn btn btn-default">&#xf002; Submit</button>
				  </form>
				</div>
				<div className="overlayOpacity"></div>
				<img className="headerImg" src ="links/cust-header-img.jpg"/>
			</div>
		);
	}
});

module.exports = CustomerFilterHeader;
