// Include React
const React = require("react");

const LocalFav = require('./localFav');
const RecentOrders = require('./recentOrders');

// Creating the Customer Main Page component
const FilterPage = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <LocalFav/>
      <RecentOrders/>
      {/* <div className="contentCook container-fluid">
        <FilteredItemsDisplay />
      </div> */}
    );
  }
});

// Export the component back for use in other files
module.exports = FilterPage;
