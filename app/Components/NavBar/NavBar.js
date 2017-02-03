import React from 'react'

import { Container } from 'react-grid-system'
import { Row, Col } from 'react-grid-system'
import AppBar from 'material-ui/AppBar'
import RightDrawer from './RightDrawer'

export default class NavBar extends React.Component {

	render() {
		return (
			<Row>
				<AppBar
					iconElementLeft = {<img src='./css/images/circleC.png'/>}
					title = "Calhoun's Riverside RV Retreat"
					iconElementRight = {<RightDrawer />}
				/>
			</Row>
		);
	}
}
