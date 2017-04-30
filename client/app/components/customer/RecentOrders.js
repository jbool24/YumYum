// Include React
const React = require("react");

const RecentOrders = React.createClass({

  render: function() {
    return (
          <div className="container recentOrders">
    	 	     <div className="row">
        		    <div className="col-md-12 recentOrders-title">
        		         <h2>Recent Orders</h2>
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
        						<h3 className="prevOrder-CardName">Restaurant</h3>
        						<hr/>
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
