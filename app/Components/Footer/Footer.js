import React from 'react'
import { Row, Col } from 'react-grid-system'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import FontAwesome from 'react-fontawesome'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const twitter = <FontAwesome  name='twitter' size='2x'> </FontAwesome>;
const google = <FontAwesome style={{color: '#dd4b39'}} name='google' size='2x'> </FontAwesome>;	      	 
const facebook = <FontAwesome style={{color: '#3b5998'}} name='facebook' size='2x'> </FontAwesome>;

const style = {
	backgroundColor: 'rgb(0, 188, 212)',
	position: 'fixed',
	width: '100%',
	height: 70,
	bottom: 0,
	overflowY: 'hidden',
	marginLeft: -7

}
// paddingLeft: 'auto', paddingRight: 'auto'
// 
export default class Footer extends React.Component {
	
	render() {
		return (
			<Row style={style}>
				<Col md={4} offset={{md:4}} style={{paddingTop: 6}}>
					<div style={{justifyContent: 'center'}}>
					<FloatingActionButton
                	  style={{marginRight: 10, marginLeft: 82}}
	                  children={google}
					  href="https://plus.google.com/+Calhounsriversidervretreat"
                	/>
					<FloatingActionButton
					 style={{marginRight: 10}}
					 children={twitter}
	                 href="https://twitter.com/CalhounsRV"  
                	/>
                	<FloatingActionButton
	                  children = {facebook} 
					  href="https://www.facebook.com/pages/Calhouns-Riverside-RV-Retreat/442200922652715"
                	/>
                	</div>
                
					{/*<Link to={'login'}>
		                <RaisedButton
		                  style={logInStyle}
		                  label="Admin Login"
		                  primary={true}
		                />
		          	</Link>*/}
		        </Col>
		    </Row>
		);
	}
}

 
			