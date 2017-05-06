// REACT MODULES ==================================
const React = require('react');


// const CookSideBar = require('./cookSideBar');
const CookHeader = require('./CookHeader');

const Cook = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {

  },

  render: function() {
    const hash = window.location.hash;
    const context = hash.slice(0, -(hash.length - hash.indexOf("?")));

    let header = "";

    if (context === "#/cook/cook-content")
          header = <CookHeader/>

    return (
        <div>
          { header }
          {/* <CookSidebar /> */}
          {this.props.children}
        </div>
    );
  }
});

module.exports = Cook;
