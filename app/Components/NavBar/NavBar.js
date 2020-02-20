import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import RightDrawer from './RightDrawer'

const style = {
	position: 'fixed',
	height: 70,
	top: 0,
	left: 0,
	paddingTop: 5
}

export default class NavBar extends React.Component {

	render() {
		return (
			<AppBar
				style = {style}
				iconElementLeft = {<Link to={'/'}><img style={{marginLeft: 5}} src='./css/images/circleC.png'/></Link>}
				iconStyleLeft = {{marginTop: 6, marginLeft: -24}}
				title = "Calhoun's Riverside RV Retreat"
				titleStyle = {{fontSize: '3vw'}}
				iconElementRight = {<RightDrawer />}
				iconStyleRight = {{marginTop: 5, marginLeft: 0, marginRight: -24}}
			/>
		);
	}
}
