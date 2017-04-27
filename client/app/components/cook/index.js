// REACT MODULES ==================================
const React = require('react');


// const CookSideBar = require('./cookSideBar');
const CookHeader = require('./cookHeader');
// const MenuItems   = require('./MenuItems');

const Cook = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {

    return (
        <div>
          <CookHeader />
          {/* <CookSidebar /> */}
          <h1>Cook Content</h1>
          {this.props.children}

          {/* <MenuItems /> */}
      </div>
    );
  }
});

module.exports = Cook;
