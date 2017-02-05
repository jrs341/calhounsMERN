import React from 'react'
import { Row, Col } from 'react-grid-system'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import FontAwesome from 'react-fontawesome'

const twitter = <FontAwesome name='twitter' size='2x'> </FontAwesome>;
const google = <FontAwesome name='google' size='2x'> </FontAwesome>;	      	 
const facebook = <FontAwesome name='facebook' size='2x'> </FontAwesome>;

const style = {
	position: 'fixed',
	width: '100%',
	height: 50,
	bottom: 0,
	overflowY: 'hidden'
}

const iconStyle = {
	width: 48,
	height: 48
}

const logInStyle = {
	float: 'right'
}		

export default class Footer extends React.Component {
	
	render() {
		return (
			<Row style={style}>
				
				<Col md={8} offset={{ md: 4 }}>
					<RaisedButton
					 icon={twitter}
	                 href="https://twitter.com/CalhounsRV"  
                	/>
                	<RaisedButton
	                  icon={google}
					  href="https://plus.google.com/+Calhounsriversidervretreat"
                	/>
                	<RaisedButton
	                  icon = {facebook} 
					  href="https://www.facebook.com/pages/Calhouns-Riverside-RV-Retreat/442200922652715"
                	/>
					<Link to={'admin'}>
		                <RaisedButton
		                  style={logInStyle}
		                  label="Admin Login"
		                  primary={true}
		                />
		          	</Link>
		        </Col>
		       
		    </Row> 
		);
	}
}

 
			