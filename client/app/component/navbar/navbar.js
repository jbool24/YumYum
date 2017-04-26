const React = require("react");

const Navbar = React.createClass({
	
	render: function(){
		return(
			<div className="nav-checkoutNav">
				
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">
								<span><img src="../public/links/Logo.png" className="image-responsive img-logo"/>YumYum</span>
							</a>
						</div> 

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
						        <li>
							        <a href="#" class=" dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							        	<img src="https://lh3.googleusercontent.com/dB3Dvgf3VIglusoGJAfpNUAANhTXW8K9mvIsiIPkhJUAbAKGKJcEMPTf0mkSexzLM5o=w300" alt="" class="clip-circle img-logo"/>
							        </a>
							        
							        <ul className="dropdown-menu">
							            <li><a href="#">Your Orders</a></li>
							            <li><a href="#">Account Settings</a></li>
							            <li><a href="#">About</a></li>
							            <li role="separator" class="divider"></li>
							        	<li><a href="#">Sign Out</a></li>
							        </ul>
						        </li>

						        <li>
						        	<a className="checkOut" href="#"><i class="fa fa-shopping-basket fa-1x " aria-hidden="true"></i></a>
						        </li>
						    </ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
});

module.exports = Navbar;