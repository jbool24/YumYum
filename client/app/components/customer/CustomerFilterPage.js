// Include React
const React = require("react");

const LocalFav = require('./LocalFav');
const RecentOrders = require('./RecentOrders');

const FilterPage = React.createClass({

  render: function() {
    return (
      <div>
        <LocalFav />
        <RecentOrders />
      </div>
    );
  }
});

module.exports = FilterPage;
