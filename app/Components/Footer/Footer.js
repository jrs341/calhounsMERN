import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
// var helpers = require("../utils/helpers");

export default class Footer extends React.Component {
	handleClick() {
		alert("clicked Admin");
		// need to goto Admin Login page here
	}

	render() {
		return (
			<div> Soon to be footer 
				<Link to={'admin'}>
                <RaisedButton
                  label="Go to Admin"
                  primary={true}
                />
              </Link>
			</div>
		);
	}
}

