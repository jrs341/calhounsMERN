import React from 'react'

import { Container } from 'react-grid-system'
import { Row, Col } from 'react-grid-system'
import AppBar from 'material-ui/AppBar'
import RightDrawer from './RightDrawer'

const style = {
	position: 'fixed',
	top: 0,
	overflowY: 'hidden'
}
export default class NavBar extends React.Component {

	render() {
		return (
			<AppBar
				style = {style}
				iconElementLeft = {<img src='./css/images/circleC.png'/>}
				title = "Calhoun's Riverside RV Retreat"
				iconElementRight = {<RightDrawer />}
			/>
		);
	}
}
