import React from 'react'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Menu from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'

const linkStyle = {
	textDecoration: 'none'
}

const flatButtonStyle = {
	varticalAlign: 'middle'
}

const menuButtonStyle = {
	height: 30,
	width: 30,
	fill: 'white',
	color: 'white'
}

export default class RightDrawer extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {open: false};
	}

	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render() {
    	return (
	      <div>
	        <FlatButton
	          style={flatButtonStyle}
	          icon={<Menu style={menuButtonStyle} />}
	          onTouchTap={this.handleToggle}
	        />
	        <Drawer 
	         docked={false}
          	 width={200}
          	 openSecondary={true}
          	 open={this.state.open}
          	 onRequestChange={(open) => this.setState({open})}
          	>
	          <AppBar
	           iconElementLeft={<IconButton onTouchTap={this.handleClose}><NavigationClose /></IconButton>}
	           title="Menu" />
	           	<MenuItem onTouchTap={this.handleClose}> About </MenuItem>
	          	<Link to={'contactUs'} style={{textDecoration: 'none'}}><MenuItem style={linkStyle} onTouchTap={this.handleClose}>Contact Us </MenuItem></Link> 
	          	<Link to={'rates'} style={{textDecoration: 'none'}}><MenuItem onTouchTap={this.handleClose}> Rates </MenuItem></Link>
	          	<MenuItem onTouchTap={this.handleClose}> Reservations </MenuItem>
	          	<MenuItem onTouchTap={this.handleClose}> Rental Agreements </MenuItem>
	          	<MenuItem onTouchTap={this.handleClose}> Rules </MenuItem>
	          	<MenuItem onTouchTap={this.handleClose}> Cabins </MenuItem>
	          	<MenuItem onTouchTap={this.handleClose}> Local Weather </MenuItem>
	          	<MenuItem onTouchTap={this.handleClose}> River Level </MenuItem>
	          	<MenuItem onTouchTap={this.handleClose}> Meet Calhoun </MenuItem>
	          	<MenuItem onTouchTap={this.handleClose}> Local News </MenuItem>
	          	<MenuItem href='http://localhost:3000/amp.html#development=1'>AMP Page</MenuItem>
	        </Drawer>
	     </div>
		);
	}
}