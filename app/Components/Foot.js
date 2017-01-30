var React = require("react");
// var helpers = require("../utils/helpers");
var Button = require("./Button");
var Foot = React.createClass({
	handleClick: function() {
		alert("clicked Admin");
		// need to goto Admin Login page here
	},

	render: function() {
		return (
			<div> Soon to be footer 
				<Button onClick={this.handleClick} text="Admin Login" />
			</div>
		);
	}
});

module.exports = Foot;