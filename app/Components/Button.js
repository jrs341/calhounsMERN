var React = require("react");
// var helpers = require("../utils/helpers");
var Button = React.createClass({
	getDefaultProps: function() {
    return {text: 'Button'};
	},

	render: function() {
		return (
			<button> {this.props.text}
			</button>
		);
	}
});

module.exports = Button;