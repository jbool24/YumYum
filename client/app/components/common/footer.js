// Include React
const React = require("react");

// Creating the Footer component
const Footer = React.createClass({

  // Here we describe this component's render method
  render: function () {
    return (
      <div className="footer-style">
        <div className="row footer-icon-cont">
          <div className="text-center col-md-6 col-md-offset-3">
            <div className="social-icons">
              <a href="#" ><img className="icon-lg" src="links/f.png" /></a>
              <a href="#" ><img className="icon-lg" src="links/t.png" /></a>
              <a href="#" ><img className="icon-lg" src="links/insta.png" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-6 col-md-offset-3">
            <p>Copyright &copy; 2017 &middot; All Rights Reserved &middot; <a href="http://github.com/" ><img className="icon-small" src="links/github.png" /></a></p>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Footer;