import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-grid-system'
import { Row, Col } from 'react-grid-system'
import AppBar from 'material-ui/AppBar'
import RightDrawer from './RightDrawer'

const style = {
	position: 'fixed',
	height: 70,
	top: 0,
	marginLeft: -7,
	paddingTop: 3
}

export default class NavBar extends React.Component {

	render() {
		return (
			<AppBar
				style = {style}
				iconElementLeft = {<Link to={'/'}><img style={{marginLeft: 5}} src='./css/images/circleC.png'/></Link>}
				title = "Calhoun's Riverside RV Retreat"
				iconElementRight = {<RightDrawer />}
			/>
		);
	}
}
