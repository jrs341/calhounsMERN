import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const submitButton = {
  width: 200
}

export default class AddUser extends React.Component {

	constructor() {
		super()

		this.state = {
			firstName: '',
			lastName: '',
			userName: '',
			password: ''
		}

		this.setFirstName = this.setFirstName.bind(this);
		this.setLastName = this.setLastName.bind(this);
		this.setUserName = this.setUserName.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.addUser = this.addUser.bind(this);
	}

	setFirstName(event, newInput){
		this.setState({firstName: newInput});
	}

	setLastName(event, newInput){
		this.setState({lastName: newInput});
	}

	setUserName(event, newInput){
		this.setState({userName: newInput});
	}

	setPassword(event, newInput){
		this.setState({password: newInput});
	}

	addUser() {
		return axios.post('/submitEmployee',
		{
			given_name: this.state.firstName,
			family_name: this.state.lastName,
			username: this.state.userName,
			password: this.state.password

		}).then(function(response){
			console.log('added new employee');
		});
	}

	render() {
		return (
			<Row>
				<Col md={8} offset={{ md: 2 }}>
					<Card>
						<CardTitle
							title='Add a New User'>

						</CardTitle>
							<TextField
				                id='given_name'
				                type='text'
				                hintText='First Name'
				                floatingLabelText='First Name'
				                onChange={this.setFirstName}
				            />
				            <TextField
				                id='family_name'
				                type='text'
				                hintText='Last Name'
				                floatingLabelText='Last Name'
				                onChange={this.setLastName}
				            />
							<TextField
				                id='userName'
				                type='text'
				                hintText='Enter a user name'
				                floatingLabelText='Enter a user name'
				                onChange={this.setUserName}
				            />
				            <TextField
				                id='password'
				                type='text'
				                hintText='Enter a password at least six characters long'
				                floatingLabelText='Enter a password at least six characters long'
				                onChange={this.setPassword}
				            />
						<CardText>
						</CardText>
						<CardActions>
							<Link to='admin'>
				              <RaisedButton
				                style={submitButton}
				                label="Submit"
				                primary={true}
				                onClick={this.addUser}
				              /> 
				            </Link>
						</CardActions>
					</Card>
				</Col>
			</Row>
		);
	}
}