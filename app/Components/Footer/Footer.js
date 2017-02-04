import React from 'react'
import { Link } from 'react-router'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'
import FontAwesome from 'react-fontawesome'

const twitter = <FontAwesome name='twitter' size='2x'> </FontAwesome>;
const google = <FontAwesome name='google' size='2x'> </FontAwesome>;	      	 
const facebook = <FontAwesome name='facebook' size='2x'> </FontAwesome>;
const style = {
	position: 'fixed',
	width: '100%',
	bottom: 0,
	overflowY: 'hidden'
}		        
export default class Footer extends React.Component {
	
	render() {
		return (
			<Paper style={style} zDepth={1}>
				<BottomNavigation>
					<BottomNavigationItem
						icon={twitter}
					/>
					<BottomNavigationItem
						icon={google}
					/>
					<BottomNavigationItem
						icon = {facebook} 
					/>
				</BottomNavigation>
					<Link to={'admin'}>
		                <RaisedButton
		                  label="Go to Admin"
		                  primary={true}
		                />
	              	</Link>
			</Paper>
		);
	}
}