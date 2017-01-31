var React = require("react");
var ReactDOM = require("react-dom");

var Admin = require("./Components/Admin");
var Nav = require("./Components/Nav");
var Foot = require("./Components/Foot");

var Navbar =React.createClass({
	render: function() {
		return (
			<div className="container">
				<Nav />
			</div>
		)
	}
});

ReactDOM.render(<Navbar />, document.getElementById("nav"));

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Admin />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));

var Footer = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Foot />
			</div>
		)
	}
});

ReactDOM.render(<Footer />, document.getElementById("footer"));