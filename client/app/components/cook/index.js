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
          <div className="wrapper">
            <div className = "row menu-title-cont">
              <div className="col-md-12 menu-title">
                <img src="links/menu.png" className = "menu-img"/>
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
    );
  }
});

module.exports = Cook;
