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
	left: 0,
	paddingTop: 1
}

export default class NavBar extends React.Component {

	render() {
		return (
			<AppBar
				style = {style}
				iconElementLeft = {<Link to={'/'}><img style={{marginLeft: 5}} src='./css/images/circleC.png'/></Link>}
				iconStyleLeft = {{marginLeft: -24}}
				title = "Calhoun's Riverside RV Retreat"
				titleStyle = {{fontSize: '3vw'}}
				iconElementRight = {<RightDrawer />}
				iconStyleRight = {{marginLeft: 0, marginRight: -24}}
			/>
		);
	}
}
