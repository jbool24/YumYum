// REACT MODULES ==================================
const React = require('react');


// const CookSideBar = require('./cookSideBar');
// const MenuItems   = require('./MenuItems');

const Cook = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {

    return (
        <div>
          {/* <CookSidebar /> */}
          <h1>Cook Content</h1>
          {this.props.children}

          {/* <MenuItems /> */}
      </div>
    );
  }
});

module.exports = Cook;
