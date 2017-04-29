// Include React
const React = require("react");

const CustomerHeader = require("./customerHeader");
// const FilteredItemsDisplay = require("./filteredItems");

// Creating the Customer Main Page component
const FilterPage = React.createClass({

  // Here we describe this component's render method
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
	    			<div className="prevOrder-Card">
					</div>
	    		</div>
	    		<div className="col-md-4 prevOrder-cont">
	    			<div className="prevOrder-Card">
					</div>
	    		</div>
	    	</div>
	    </div>
	 </div>
    );
  }
});

// Export the component back for use in other files
module.exports = FilterPage;
