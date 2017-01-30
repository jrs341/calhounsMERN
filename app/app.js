var React = require("react");
var ReactDOM = require("react-dom");

var Admin = require("./Components/Admin");

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
