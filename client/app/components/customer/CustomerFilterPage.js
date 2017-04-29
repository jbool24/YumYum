// Include React
const React = require("react");

const LocalFav = require('./LocalFav');
const RecentOrders = require('./RecentOrders');

// Creating the Customer Main Page component
const FilterPage = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div>
        <LocalFav/>
        <RecentOrders/>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = FilterPage;
