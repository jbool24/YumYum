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
        						<h4 className="prevOrder-CardName">Restaurant</h4>
                    <div className = "card-footer">
                      <h4>Total</h4>
          						<hr/>
                    </div>
        					</div>
      	    		</div>
      	    		<div className="col-md-4 prevOrder-cont">
      	    			<div className="prevOrder-Card"></div>
      	    		</div>
      	    		<div className="col-md-4 prevOrder-cont">
      	    			<div className="prevOrder-Card"></div>
      	    		</div>
      	    	</div>
    	    </div>
    	 </div>
    );
  }
});

module.exports = RecentOrders;
