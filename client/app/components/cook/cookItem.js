const React = require("react");

const CookItem = React.createClass({


	render: function(){
		return(
			<div>
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">Add Item to Cart</h4>
				      </div>
				      <div className="modal-body">

						<div className="qty-cont">
							<h5>Quantity: </h5>
							<div className="dropdown">
							  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    0
							    <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li>1</li>
							    <li>2</li>
							    <li>3</li>
							    <li>4</li>
							  </ul>
							</div> 
						</div>
				      	<h5>Special Instructions</h5>
				        <textarea className="form-control" rows="3"></textarea>

				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-primary submit-btn">Add</button>
				        <button type="button" className="btn btn-default cancel-btn" data-dismiss="modal">Cancel</button>
				      </div>
				    </div>
				  </div>
				</div>

				<div className="menuItem">
					<div className="row menuItem-cont">
						<div className="col-md-6 menuItem-imgCont">
							<img src = "links/food6.jpg" className="menuItem-img"/>
						</div>
						<div className="col-md-6 menuItem-infoCont">
							<div className="menuItem-info">
								<i className="fa fa-times-circle exit-btn" aria-hidden="true"></i>
								<h1> food name</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat ac risus ultricies tempus. Vivamus semper congue dignissim.  </p>

								<button type="submit" className="search-btn btn btn-default" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus-square" aria-hidden="true"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CookItem;