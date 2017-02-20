import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-grid-system'
import { Row, Col } from 'react-grid-system'
import AppBar from 'material-ui/AppBar'
// import DropDown from './DropDown'
import RightDrawer from './RightDrawer'
// overflowY: 'hidden',
const style = {
	position: 'fixed',
	top: 0
}
export default class NavBar extends React.Component {

	render() {
		return (
			<AppBar
				style = {style}
				iconElementLeft = {<Link to={'/'}><img src='./css/images/circleC.png'/></Link>}
				title = "Calhoun's Riverside RV Retreat"
				iconElementRight = {<RightDrawer />}
			/>
		);
	}
}
