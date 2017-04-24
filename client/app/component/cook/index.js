// REACT MODULES ==================================
const React = require('react');


// const CookSideBar = require('./cookSideBar');
// const MenuItems   = require('./MenuItems');

const Cook = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {
    let style = {
      width: '20rem',
    };
    return (
        <div>
          {/* <CookSidebar /> */}
          <h1>Cook Content</h1>
          <div className = "card" style={style}>
            <img className="cardImgTop" src="http://placehold.it/300x300" alt="Card image cap" />
            <div className="cardBlock">
              <h4 className="cardTitle">Card title</h4>
              <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#customer" className="btn btnPrimary">Go somewhere</a>
            </div>
          </div>
          {/* <MenuItems /> */}
      </div>
    );
  }
});

module.exports = Cook;
