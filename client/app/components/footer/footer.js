// Include React
const React = require("react");

// Creating the Footer component
const Footer = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="footer row footerStyle">
        <div className="textCenter colMd6 colMdOffset3">
        <p>Copyright &copy; 2017 &middot; All Rights Reserved &middot; <a href="http://yourwebsite.com/" >JBool</a></p>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Footer;