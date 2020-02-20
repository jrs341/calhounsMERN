import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const cardStyle = {
	position: 'relative',
	top: -25
};

const submitButton = {
  width: 200
};

export default class Login extends React.Component {

	constructor() {
		super()

		this.state = {
			status: 'Please enter your username and password',
			link: '',
			userName: '',
			password: '',
			disableButton: true
		}

		this.getUserNameAndPassword = this.getUserNameAndPassword.bind(this);
		this.checkPassword = this.checkPassword.bind(this);
	}

	getUserNameAndPassword(event) {
		// console.log(event.target.value);
		return axios({
			type: 'GET',
			url: '/userName/'+ event.target.value
		}).then((response)=> {
			this.setState({userName: response.data.username});
			this.setState({password: response.data.password});
		});
	}

	checkPassword(event) {
		if (event.target.value == this.state.password) {
			this.setState({disableButton: false});
			this.setState({link: 'admin'});
			this.setState({status: ''});
		} else {
			this.setState({status: 'Sorry that password does not match our records'});
		}
	}

	render() {
		return (
			<Row>
				<Col md={8} offset={{ md: 2 }}>
					<Card style={{transform: 'translateY(26%)'}}>
						<CardTitle
							title='Admin Login'
							subtitle={this.state.status}>
						</CardTitle>
						<CardText style={cardStyle}>
						<TextField
							style={{display: 'block'}}
			                id='username'
			                type='text'
			                hintText='Username'
			                floatingLabelText='Username'
			                onBlur={this.getUserNameAndPassword}
			            />
			            <TextField
			                id='password'
			                type='text'
			                hintText='Password'
			                floatingLabelText='Password'
			                onChange={this.checkPassword}
			            />
						</CardText>
						<CardActions>
							<Link to={this.state.link}>
				              <RaisedButton
				                style={submitButton}
				                disabled={this.state.disableButton}
				                label="Login"
				                primary={true}
				              /> 
				            </Link>
						</CardActions>
					</Card>
				</Col>
			</Row>
		);
	}
}