// Include React
const React = require("react");

const CustomerHeader = require("./customerHeader");
// const FilteredItemsDisplay = require("./filteredItems");

// Creating the Customer Main Page component
const FilterPage = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="contentCook container-fluid">
        <CustomerHeader />
        {/* <FilteredItemsDisplay /> */}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = FilterPage;
