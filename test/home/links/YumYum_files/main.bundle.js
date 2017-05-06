webpackJsonp([0],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(78);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is a Node Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Node Buffer, otherwise false
 */
function isBuffer(val) {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(157).Buffer))

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// React Router Required Objects
var React = __webpack_require__(3);
var router = __webpack_require__(73);

var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var App = __webpack_require__(122);
var Cook = __webpack_require__(128);
var CookDetails = __webpack_require__(298);

var Customer = __webpack_require__(135);
var CustomerDash = __webpack_require__(130);
var CustomerContent = __webpack_require__(129);
var CustomerFilterPage = __webpack_require__(132);

module.exports = React.createElement(
  Router,
  { history: hashHistory },
  React.createElement(
    Route,
    { path: '/', component: App },
    React.createElement(
      Route,
      { path: 'customer', component: Customer },
      React.createElement(
        Route,
        { path: 'customer-dashboard', component: CustomerDash },
        React.createElement(Route, { path: 'filter-search', component: CustomerFilterPage }),
        React.createElement(Route, { path: 'filter-results', component: CookDetails }),
        React.createElement(IndexRoute, { component: CustomerFilterPage })
      ),
      React.createElement(Route, { path: 'customer-content', component: CustomerContent }),
      React.createElement(IndexRoute, { component: CustomerDash })
    ),
    React.createElement(
      Route,
      { path: 'cook', component: Cook },
      React.createElement(Route, { path: 'cook-content', component: CookDetails }),
      React.createElement(IndexRoute, { component: CookDetails })
    ),
    React.createElement(IndexRoute, { component: Customer })
  )
);

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REACT MODULES ==================================
var React = __webpack_require__(3);

// Import components ==============================

var NavBar = __webpack_require__(126);
var Footer = __webpack_require__(125);
//=================================================


var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {};
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(NavBar, null),
      this.props.children,
      React.createElement(Footer, null)
    );
  }
});

module.exports = App;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Include React
var React = __webpack_require__(3);
var helper = __webpack_require__(136);

var Sidebar = React.createClass({
  displayName: "Sidebar",


  getInitialState: function getInitialState() {
    return { sidebarStatus: "sidebar-closed", cart: [], cartTotal: undefined };
  },

  componentWillMount: function componentWillMount() {},

  componentWillReceiveProps: function componentWillReceiveProps() {
    if (this.props.visible) {
      this.setState({ sidebarStatus: "sidebar-open" });
    } else {
      this.setState({ sidebarStatus: "sidebar-closed" });
    }
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    //Get items from req.session.cart
    helper.getCart().then(function (data) {
      _this.setState({ cart: data.cart, cartTotal: data.cartTotal });
    }).then(function () {
      //Creates stripe payment button
      var amount = _this.state.cartTotal * 100;
      var script = document.createElement("script");

      script.setAttribute("src", "https://checkout.stripe.com/checkout.js");
      script.setAttribute("class", "stripe-button");
      script.setAttribute("data-key", "pk_test_kWSuXV6D1USg0ziKSpne0TR9");
      script.setAttribute("data-amount", amount);
      script.setAttribute("data-name", "Demo Site");
      script.setAttribute("data-description", "Widget");
      script.setAttribute("data-image", "https://stripe.com/img/documentation/checkout/marketplace.png");

      document.getElementById('stripe-form').appendChild(script);
    });
  },

  getCart: function getCart() {
    var _this2 = this;

    helper.getCart().then(function (data) {
      _this2.setState({ cart: data.cart, cartTotal: data.cartTotal });
    });
  },

  handleAddItem: function handleAddItem(itemId) {
    var _this3 = this;

    helper.addItem(itemId).then(function () {
      return _this3.getCart();
    });
  },

  handleSubtractItem: function handleSubtractItem(itemId) {
    var _this4 = this;

    helper.subtractItem(itemId).then(function () {
      return _this4.getCart();
    });
  },

  handleDeleteItem: function handleDeleteItem(itemId) {
    var _this5 = this;

    helper.deleteItem(itemId).then(function () {
      return _this5.getCart();
    });
  },

  renderEmptyCart: function renderEmptyCart() {
    return React.createElement(
      "div",
      { className: "emptycart-cont " + this.state.sidebarStatus },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-12 text-center" },
          React.createElement("i", { className: "fa fa-shopping-cart fa-5x", "aria-hidden": "true" }),
          React.createElement(
            "h3",
            null,
            "Your Cart is Empty!"
          )
        )
      )
    );
  },

  renderCart: function renderCart() {
    var _this6 = this;

    var cart = this.state.cart;
    var amount = this.state.cartTotal * 100;

    // console.log(cart);
    return React.createElement(
      "div",
      { className: "fullcart-cont " + this.state.sidebarStatus },
      React.createElement(
        "div",
        { className: "row orderHeader" },
        React.createElement(
          "div",
          { className: "col-md-12 text-center" },
          React.createElement(
            "h3",
            null,
            "Your Order"
          ),
          React.createElement("hr", null)
        )
      ),
      cart.map(function (items) {
        return React.createElement(
          "div",
          { key: items.item._id, className: "row ordereditems-cart" },
          React.createElement(
            "div",
            { className: "col-md-1 removeItem" },
            React.createElement(
              "div",
              { onClick: function onClick() {
                  return _this6.handleAddItem(items.item._id);
                }, className: "clickable" },
              React.createElement("i", { className: "fa fa-plus-circle", "aria-hidden": "true" })
            ),
            React.createElement(
              "div",
              { onClick: function onClick() {
                  return _this6.handleSubtractItem(items.item._id);
                }, className: "clickable" },
              React.createElement("i", { className: "fa fa-minus-circle", "aria-hidden": "true" })
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-1", id: "quantityOrd" },
            React.createElement(
              "p",
              null,
              items.qty
            )
          ),
          React.createElement(
            "div",
            _defineProperty({ className: "col-md-7", id: "itemName", ass: "col-md-6" }, "id", "itemName"),
            React.createElement(
              "p",
              null,
              items.item.itemName
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-2", id: "itemCost" },
            React.createElement(
              "p",
              null,
              "$",
              items.price
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-1", id: "deleteOrd" },
            React.createElement(
              "span",
              { onClick: function onClick() {
                  return _this6.handleDeleteItem(items.item._id);
                }, className: "clickable" },
              React.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })
            )
          )
        );
      }),
      React.createElement(
        "div",
        { className: "total-cont" },
        React.createElement(
          "h4",
          null,
          "Total"
        ),
        React.createElement("hr", null),
        React.createElement(
          "div",
          { className: "row totalInfo" },
          React.createElement(
            "div",
            { className: "col-md-3", id: "totalOrd" },
            React.createElement(
              "p",
              null,
              "1"
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-3", id: "totalCost" },
            React.createElement(
              "p",
              null,
              "$5.99"
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-3", id: "totalTax" },
            React.createElement(
              "p",
              null,
              "0.79"
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-3", id: "total" },
            React.createElement(
              "p",
              null,
              "$6.78"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row orderBtn-cont" },
        React.createElement(
          "div",
          { className: "col-md-12 text-center" },
          React.createElement(
            "form",
            { action: "/users/stripe-charge", method: "POST", id: "stripe-form" },
            React.createElement("input", { type: "hidden", name: "amount", value: "" + amount })
          )
        )
      )
    );
  },

  render: function render() {
    if (!this.state.cart) {
      return this.renderEmptyCart();
    }
    return this.renderCart();
  }
});

// Export the component back for use in other files
module.exports = Sidebar;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Include React
var React = __webpack_require__(3);

// Creating the Footer component
var Footer = React.createClass({
  displayName: "Footer",


  // Here we describe this component's render method
  render: function render() {
    return React.createElement(
      "div",
      { className: "footer-style" },
      React.createElement(
        "div",
        { className: "row footer-icon-cont" },
        React.createElement(
          "div",
          { className: "text-center col-md-6 col-md-offset-3" },
          React.createElement(
            "div",
            { className: "social-icons" },
            React.createElement(
              "a",
              { href: "#" },
              React.createElement("img", { className: "icon-lg", src: "links/f.png" })
            ),
            React.createElement(
              "a",
              { href: "#" },
              React.createElement("img", { className: "icon-lg", src: "links/t.png" })
            ),
            React.createElement(
              "a",
              { href: "#" },
              React.createElement("img", { className: "icon-lg", src: "links/insta.png" })
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "text-center col-md-6 col-md-offset-3" },
          React.createElement(
            "p",
            null,
            "Copyright \xA9 2017 \xB7 All Rights Reserved \xB7 ",
            React.createElement(
              "a",
              { href: "http://github.com/" },
              React.createElement("img", { className: "icon-small", src: "links/github.png" })
            )
          )
        )
      )
    );
  }
});

// Export the component back for use in other files
module.exports = Footer;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);
var Sidebar = __webpack_require__(124);

var Navbar = React.createClass({
	displayName: "Navbar",


	getInitialState: function getInitialState() {
		return { sidebarVisible: true };
	},

	handleSidebarView: function handleSidebarView() {
		this.setState({ sidebarVisible: !this.state.sidebarVisible });
	},

	render: function render() {

		return React.createElement(
			"div",
			{ className: "nav-checkoutNav" },
			React.createElement(
				"nav",
				{ className: "navbar navbar-default navbar-fixed-top" },
				React.createElement(
					"div",
					{ className: "container-fluid" },
					React.createElement(
						"div",
						{ className: "navbar-header" },
						React.createElement(
							"a",
							{ className: "navbar-brand navbar-brand-loggedin", href: "#" },
							React.createElement("img", { src: "links/foodfriends.png", className: "image-responsive nav-img-logo" })
						)
					),
					React.createElement(
						"div",
						{ className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
						React.createElement(
							"ul",
							{ className: "nav navbar-nav navbar-right" },
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
									React.createElement("img", { src: "https://lh3.googleusercontent.com/dB3Dvgf3VIglusoGJAfpNUAANhTXW8K9mvIsiIPkhJUAbAKGKJcEMPTf0mkSexzLM5o=w300", alt: "", className: "clip-circle img-logo" })
								),
								React.createElement(
									"ul",
									{ className: "dropdown-menu" },
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "#" },
											"Your Orders"
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "#" },
											"Account Settings"
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "#" },
											"About"
										)
									),
									React.createElement("li", { role: "separator", className: "divider" }),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/users/logout" },
											"Sign Out"
										)
									)
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ onClick: this.handleSidebarView, className: "checkOut clickable" },
									React.createElement("i", { className: "fa fa-shopping-basket fa-1x ", "aria-hidden": "true" })
								)
							)
						)
					)
				)
			),
			React.createElement(Sidebar, { visible: this.state.sidebarVisible })
		);
	}
});

module.exports = Navbar;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REACT MODULES ==================================
var React = __webpack_require__(3);

// const CookSideBar = require('./cookSideBar');
var CookHeader = __webpack_require__(47);

var Cook = React.createClass({
  displayName: 'Cook',

  getInitialState: function getInitialState() {
    return this.state = {};
  },

  render: function render() {
    var hash = window.location.hash;
    var context = hash.slice(0, -(hash.length - hash.indexOf("?")));

    var header = "";

    if (context === "#/cook/cook-content") header = React.createElement(CookHeader, null);

    return React.createElement(
      'div',
      null,
      header,
      this.props.children
    );
  }
});

module.exports = Cook;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);

var CustomerContent = React.createClass({
	displayName: "CustomerContent",


	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Hello"
			)
		);
	}
});

module.exports = CustomerContent;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);

var CustomerFilterHeader = __webpack_require__(131);
var CookHeader = __webpack_require__(47);

var CustomerDash = React.createClass({
	displayName: 'CustomerDash',


	render: function render() {
		var hash = window.location.hash;
		var context = hash.slice(0, -(hash.length - hash.indexOf("?")));

		var header = "";

		context === "#/customer/customer-dashboard/filter-search" ? header = React.createElement(CustomerFilterHeader, null) : header = React.createElement(CookHeader, null);

		return React.createElement(
			'div',
			null,
			header,
			this.props.children
		);
	}
});

module.exports = CustomerDash;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);

var CustomerFilterHeader = React.createClass({
	displayName: "CustomerFilterHeader",


	render: function render() {
		return React.createElement(
			"div",
			{ className: "header" },
			React.createElement(
				"div",
				{ className: "headerCont" },
				React.createElement(
					"h1",
					null,
					"Insert Text Here"
				),
				React.createElement(
					"h3",
					null,
					" blah blah blah blah description "
				),
				React.createElement(
					"form",
					{ className: "navbar-form" },
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement("input", { type: "text", className: "form-control address-form", placeholder: "\uF124 City, State or Zip Code" })
					),
					React.createElement(
						"div",
						{ className: "form-group " },
						React.createElement("input", { type: "text", className: "form-control cuisine-form", placeholder: "\uF1B1 Japanese, American, e.g." })
					),
					React.createElement(
						"button",
						{ type: "submit", className: "search-btn btn btn-default" },
						"\uF002 Submit"
					)
				)
			),
			React.createElement("div", { className: "overlayOpacity" }),
			React.createElement("img", { className: "headerImg", src: "links/food6.jpg" })
		);
	}
});

module.exports = CustomerFilterHeader;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Include React
var React = __webpack_require__(3);

var LocalFav = __webpack_require__(133);
var RecentOrders = __webpack_require__(134);

var FilterPage = React.createClass({
  displayName: 'FilterPage',

  getInitialState: function getInitialState() {
    return {
      items: [{ id: 1, itemName: "Turduckin", cusine: "Indian", price: "$8.00" }, { id: 2, itemName: "Tikka Masala", cusine: "Indian", price: "$8.00" }, { id: 3, itemName: "Tom Hoac Muc Chien Gion", cusine: "Vietnamese", price: "$8.95" }, { id: 4, itemName: "Pickle Soup", cusine: "Polish", price: "$3.00" }, { id: 5, itemName: "Ramen", cusine: "Japanese", price: "$12.00" }, { id: 6, itemName: "Kalua Pig", cusine: "Hawaiian", price: "$13.00" }, { id: 7, itemName: "Halea", cusine: "Peruvian", price: "$14.00" }, { id: 8, itemName: "Zuccini Bread", cusine: "Italian", price: "$2.00" }]
    };
  },

  componentWillMount: function componentWillMount() {
    // axios.get('/fooditem/top-eight').then((response) => {
    //   console.log(response);
    //   this.setState({items: response.items });
    // }).catch((error) => {
    //   this.setState({ items: "Sorry, No items yet."})
    // });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(LocalFav, { foodItems: this.state.items }),
      React.createElement(RecentOrders, null)
    );
  }
});

module.exports = FilterPage;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);

var LocalFav = React.createClass({
	displayName: "LocalFav",

	getInitialState: function getInitialState() {
		return {
			items: []
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.foodItems[0]._id !== this.props.foodItems[0]._id) this.setState({ items: nextProps.foodItems });
		console.log("called willReveiveProps");
	},

	render: function render() {
		var items = this.props.foodItems;

		var foodCard = function foodCard(items) {
			return items.map(function (item) {
				return React.createElement(
					"div",
					{ key: item.id, className: "col-xs-3" },
					React.createElement(
						"div",
						{ className: "localFav-card" },
						React.createElement(
							"div",
							{ className: "localFav-cardTop" },
							React.createElement("img", { src: "links/home.jpg", className: "localFav-cardImg" }),
							React.createElement(
								"h3",
								{ className: "localFav-cardItem" },
								item.cuisine
							)
						),
						React.createElement(
							"div",
							{ className: "localFav-cardBottom" },
							React.createElement(
								"div",
								{ className: "row localFav-cardStarRating" },
								React.createElement(
									"div",
									{ className: "col-md-12" },
									React.createElement("i", { className: "fa fa-star", "aria-hidden": "true" }),
									React.createElement("i", { className: "fa fa-star", "aria-hidden": "true" }),
									React.createElement("i", { className: "fa fa-star", "aria-hidden": "true" }),
									React.createElement("i", { className: "fa fa-star", "aria-hidden": "true" })
								)
							),
							React.createElement(
								"div",
								{ className: "row localFav-cardInfo" },
								React.createElement(
									"div",
									{ className: "col-md-4 localFav-cardPrice" },
									item.price
								),
								React.createElement(
									"div",
									{ className: "col-md-8 localFav-cardName" },
									item.itemName
								)
							)
						)
					)
				);
			});
		};

		var firstSet = foodCard(items.slice(0, 4));
		var secondSet = foodCard(items.slice(4));
		console.log(firstSet, secondSet);

		return React.createElement(
			"div",
			{ className: "container localFav-cont" },
			React.createElement(
				"div",
				{ className: "col-xs-12" },
				React.createElement(
					"h2",
					null,
					"Local Favorites"
				),
				React.createElement(
					"div",
					{ className: "well" },
					React.createElement(
						"div",
						{ id: "myCarousel", className: "carousel slide" },
						React.createElement(
							"div",
							{ className: "carousel-inner" },
							React.createElement(
								"div",
								{ className: "item active" },
								React.createElement(
									"div",
									{ className: "row" },
									firstSet
								)
							),
							React.createElement(
								"div",
								{ className: "item" },
								React.createElement(
									"div",
									{ className: "row" },
									secondSet
								)
							)
						)
					),
					React.createElement(
						"a",
						{ className: "left carousel-control", href: "#myCarousel", "data-slide": "prev" },
						React.createElement("i", { className: "fa fa-angle-left fa-2x", "aria-hidden": "true" })
					),
					React.createElement(
						"a",
						{ className: "right carousel-control", href: "#myCarousel", "data-slide": "next" },
						React.createElement("i", { className: "fa fa-angle-right fa-2x", "aria-hidden": "true" })
					)
				)
			)
		);
	}
});

module.exports = LocalFav;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Include React
var React = __webpack_require__(3);

var RecentOrders = React.createClass({
  displayName: "RecentOrders",


  render: function render() {
    return React.createElement(
      "div",
      { className: "container recentOrders" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-12 recentOrders-title" },
          React.createElement(
            "h2",
            null,
            "Recent Orders"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "recentOrders-cont" },
        React.createElement(
          "div",
          { className: "row prevOrders" },
          React.createElement(
            "div",
            { className: "col-md-4 prevOrder-cont" },
            React.createElement(
              "div",
              { className: "prevOrder-Card" },
              React.createElement(
                "h3",
                { className: "prevOrder-CardName" },
                "Restaurant"
              ),
              React.createElement("hr", null)
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-4 prevOrder-cont" },
            React.createElement("div", { className: "prevOrder-Card" })
          ),
          React.createElement(
            "div",
            { className: "col-md-4 prevOrder-cont" },
            React.createElement("div", { className: "prevOrder-Card" })
          )
        )
      )
    );
  }
});

module.exports = RecentOrders;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REACT MODULES ==================================
var React = __webpack_require__(3);

var Customer = React.createClass({
  displayName: "Customer",

  getInitialState: function getInitialState() {
    return {
      // this data comes from DB in componentWillMount
      items: [{ id: 1, name: "Turduckin" }, { id: 2, name: "Tika Masala" }, { id: 3, name: "Borscht" }]
    };
  },

  componentWillMount: function componentWillMount() {
    // Call DB to get items
    // this.setState({items: results of db call })
  },

  render: function render() {

    return React.createElement(
      "div",
      null,
      this.props.children
    );
  }
});

module.exports = Customer;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(138);;

var helper = {
  getCart: function getCart() {
    return axios.get('/cart/get-items').then(function (res) {
      console.log(res.data);
      return res.data;
    }).catch(function (error) {
      console.log(error);
    });
  },

  addItem: function addItem(itemId) {
    return axios.get('/cart/add-item/' + itemId).then(function (res) {
      console.log(res.data);
      return false;
    }).catch(function (error) {
      console.log(error);
    });
  },

  subtractItem: function subtractItem(itemId) {
    return axios.get('/cart/decrease-item/' + itemId).then(function (res) {
      console.log(res);
      return false;
    }).catch(function (error) {
      console.log(error);
    });
  },

  deleteItem: function deleteItem(itemId) {
    return axios.get('/cart/delete-item/' + itemId).then(function (res) {
      console.log(res.data);
      return false;
    }).catch(function (error) {
      console.log(error);
    });
  }

};
module.exports = helper;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(46);

var Routes = __webpack_require__(121);

ReactDOM.render(Routes, document.getElementById('app-target'));

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(139);

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);
var bind = __webpack_require__(78);
var Axios = __webpack_require__(141);
var defaults = __webpack_require__(48);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(75);
axios.CancelToken = __webpack_require__(140);
axios.isCancel = __webpack_require__(76);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(155);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(75);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(48);
var utils = __webpack_require__(11);
var InterceptorManager = __webpack_require__(142);
var dispatchRequest = __webpack_require__(143);
var isAbsoluteURL = __webpack_require__(151);
var combineURLs = __webpack_require__(149);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);
var transformData = __webpack_require__(146);
var isCancel = __webpack_require__(76);
var defaults = __webpack_require__(48);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(77);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
  }
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);

var CookItem = React.createClass({
	displayName: "CookItem",


	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ className: "modal fade", id: "myModal", tabindex: "-1", role: "dialog", "aria-labelledby": "myModalLabel" },
				React.createElement(
					"div",
					{ className: "modal-dialog", role: "document" },
					React.createElement(
						"div",
						{ className: "modal-content" },
						React.createElement(
							"div",
							{ className: "modal-header" },
							React.createElement(
								"button",
								{ type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
								React.createElement(
									"span",
									{ "aria-hidden": "true" },
									"\xD7"
								)
							),
							React.createElement(
								"h4",
								{ className: "modal-title", id: "myModalLabel" },
								"Add Item to Cart"
							)
						),
						React.createElement(
							"div",
							{ className: "modal-body" },
							React.createElement(
								"div",
								{ className: "qty-cont" },
								React.createElement(
									"h5",
									null,
									"Quantity: "
								),
								React.createElement(
									"div",
									{ className: "dropdown" },
									React.createElement(
										"button",
										{ className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true" },
										"0",
										React.createElement("span", { className: "caret" })
									),
									React.createElement(
										"ul",
										{ className: "dropdown-menu", "aria-labelledby": "dropdownMenu1" },
										React.createElement(
											"li",
											null,
											"1"
										),
										React.createElement(
											"li",
											null,
											"2"
										),
										React.createElement(
											"li",
											null,
											"3"
										),
										React.createElement(
											"li",
											null,
											"4"
										)
									)
								)
							),
							React.createElement(
								"h5",
								null,
								"Special Instructions"
							),
							React.createElement("textarea", { className: "form-control", rows: "3" })
						),
						React.createElement(
							"div",
							{ className: "modal-footer" },
							React.createElement(
								"button",
								{ type: "button", className: "btn btn-primary submit-btn" },
								"Add"
							),
							React.createElement(
								"button",
								{ type: "button", className: "btn btn-default cancel-btn", "data-dismiss": "modal" },
								"Cancel"
							)
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "menuItem" },
				React.createElement(
					"div",
					{ className: "row menuItem-cont" },
					React.createElement(
						"div",
						{ className: "col-md-6 menuItem-imgCont" },
						React.createElement("img", { src: "links/food6.jpg", className: "menuItem-img" })
					),
					React.createElement(
						"div",
						{ className: "col-md-6 menuItem-infoCont" },
						React.createElement(
							"div",
							{ className: "menuItem-info" },
							React.createElement(
								"h1",
								null,
								" food name"
							),
							React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat ac risus ultricies tempus. Vivamus semper congue dignissim. Nulla tempor diam a tellus facilisis efficitur. Pellentesque nec suscipit nunc, et faucibus libero. Quisque sagittis turpis in pulvinar pharetra. Fusce lacus nisi, gravida eget pretium sit amet, sodales et dui. Vestibulum quis facilisis orci. "
							),
							React.createElement(
								"button",
								{ type: "submit", className: "search-btn btn btn-default", "data-toggle": "modal", "data-target": "#myModal" },
								React.createElement("i", { className: "fa fa-plus-square", "aria-hidden": "true" }),
								" Add to Cart"
							)
						)
					)
				)
			)
		);
	}
});

module.exports = CookItem;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(3);

var CookHeader = React.createClass({
	displayName: "CookHeader",


	render: function render() {
		return React.createElement(
			"div",
			{ className: "cook-header" },
			React.createElement(
				"div",
				{ className: "cook-headerCont" },
				React.createElement(
					"div",
					{ className: "row cook-headerRow" },
					React.createElement(
						"div",
						{ className: "col-md-3 cook-profImg" },
						React.createElement(
							"a",
							{ href: "http://placehold.it" },
							React.createElement("img", { src: "http://placehold.it/150x150" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-9 cook-info" },
						React.createElement(
							"h1",
							null,
							"Restaurant Name"
						),
						React.createElement(
							"h4",
							null,
							"161 Newkirk St, Jersey City, NJ 07305"
						),
						React.createElement(
							"p",
							null,
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam blandit ante at maximus. Vivamus odio ante, porttitor vitae gravida sodales, consectetur consectetur ante."
						)
					)
				)
			),
			React.createElement("div", { className: "cook-overlayOpacity" }),
			React.createElement("img", { className: "cook-headerImg", src: "links/food6.jpg" })
		);
	}
});

module.exports = CookHeader;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(11);
var normalizeHeaderName = __webpack_require__(153);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(74);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(74);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(11);
var settle = __webpack_require__(145);
var buildURL = __webpack_require__(148);
var parseHeaders = __webpack_require__(154);
var isURLSameOrigin = __webpack_require__(152);
var createError = __webpack_require__(77);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(147);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(150);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(144);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ })

},[137]);
//# sourceMappingURL=main.map