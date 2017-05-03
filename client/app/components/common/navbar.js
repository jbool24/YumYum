const React = require("react");
const Sidebar = require('./Sidebar');

const Navbar = React.createClass({

	getInitialState: function(){
    return {sidebarVisible: true};
  },

	handleSidebarView: function(){
  	this.setState({sidebarVisible: !this.state.sidebarVisible});
  },

	render: function(){

		return(
			<div className="nav-checkoutNav">

				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">
								<span><img src="links/Logo.png" className="image-responsive img-logo"/>YumYum</span>
							</a>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
						        <li>
							        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							        	<img src="https://lh3.googleusercontent.com/dB3Dvgf3VIglusoGJAfpNUAANhTXW8K9mvIsiIPkhJUAbAKGKJcEMPTf0mkSexzLM5o=w300" alt="" className="clip-circle img-logo"/>
							        </a>

							        <ul className="dropdown-menu">
							            <li><a href="#">Your Orders</a></li>
							            <li><a href="#">Account Settings</a></li>
							            <li><a href="#">About</a></li>
							            <li role="separator" className="divider"></li>
							        	<li><a href="/users/logout">Sign Out</a></li>
							        </ul>
						        </li>

						        <li>
						        	<a onClick = {this.handleSidebarView} className="checkOut clickable"><i className="fa fa-shopping-basket fa-1x " aria-hidden="true"></i></a>
						        </li>
						    </ul>
						</div>
					</div>
				</nav>

				<Sidebar visible = {this.state.sidebarVisible} />

			</div>
		);
	}
});

module.exports = Navbar;
