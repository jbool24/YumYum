// Include React
const React = require("react");

const RecentOrders = React.createClass({

  render: function() {
    return (
          <div className="container recentOrders">
    	 	     <div className="row recentorders-title-cont">
        		    <div className="col-md-12 recentOrders-title">
                  <img src="links/recentord.png" className="recentorg-img"/>
        		    </div>
      	    </div>

    	    <div className="recentOrders-cont">
    	    {/*
    			<div className="row noPrevOrders">
    				<span>You have no recent orders!</span>
        		</div>
    	     */}

      	    	<div className="row prevOrders">
      	    		<div className="col-md-4 prevOrder-cont">
        					<div className="prevOrder-Card">
        						<h4 className="prevOrder-CardName">Leico's</h4>
                    <div className="card-item">
                      <div className="row">
                        <div className="col-md-4">
                          <h5>1x</h5>
                        </div>
                        <div className="col-md-8">
                          <h5>Pasta</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <h5>1x</h5>
                        </div>
                        <div className="col-md-8">
                          <h5>Sandwich</h5>
                        </div>
                      </div>
                    </div>

                    <div className = "card-footer">
                      <h4>Total</h4>
          						<hr/>
                      <h4 className="card-price">$10.00</h4>
                    </div>
        					</div>
      	    		</div>

      	    		<div className="col-md-4 prevOrder-cont">
                  <div className="prevOrder-Card">
                    <h4 className="prevOrder-CardName">Carmines</h4>
                    <div className="card-item">
                      <div className="row">
                        <div className="col-md-4">
                          <h5>1x</h5>
                        </div>
                        <div className="col-md-8">
                          <h5>BLT</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <h5>1x</h5>
                        </div>
                        <div className="col-md-8">
                          <h5>Cheeseburger</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <h5>1x</h5>
                        </div>
                        <div className="col-md-8">
                          <h5>Fries</h5>
                        </div>
                      </div>
                    </div>

                    <div className = "card-footer">
                      <h4>Total</h4>
                      <hr/>
                      <h4 className="card-price">$14.00</h4>
                    </div>
                  </div>
                </div>

      	    		<div className="col-md-4 prevOrder-cont">
                  <div className="prevOrder-Card">
                    <h4 className="prevOrder-CardName">Chinese</h4>
                    <div className="card-item">
                      <div className="row">
                        <div className="col-md-4">
                          <h5>1x</h5>
                        </div>
                        <div className="col-md-8">
                          <h5>General Tso's</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <h5>1x</h5>
                        </div>
                        <div className="col-md-8">
                          <h5>Buk Choy</h5>
                        </div>
                      </div>
                    </div>

                    <div className = "card-footer">
                      <h4>Total</h4>
                      <hr/>
                      <h4 className="card-price">$15.00</h4>
                    </div>
                  </div>
                </div>
      	    	</div>
    	    </div>
    	 </div>
    );
  }
});

module.exports = RecentOrders;
