import React from 'react'
import { Link } from 'react-router'
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
	left: 0,
	overflowY: 'hidden'
};

const socialDiv = {
	marginLeft: 'auto',
	marginRight: 'auto',
	marginTop: 6,
	width: 188 
};

export default class Footer extends React.Component {
	
	render() {
		return (
			<div style={style}>
				<div style={socialDiv}>
					<FloatingActionButton
                	  style={{marginRight: 10}}
	                  children={google}
					  href="https://plus.google.com/+Calhounsriversidervretreat"
                	/>
					<FloatingActionButton
					 style={{marginRight: 10}}
					 children={twitter}
	                 href="https://twitter.com/CalhounsRV"  
                	/>
                	<FloatingActionButton
	                  children={facebook} 
					  href="https://www.facebook.com/pages/Calhouns-Riverside-RV-Retreat/442200922652715"
                	/>
                </div>
        	</div>  
		);
	}
}

 
			