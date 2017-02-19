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

export default class Login extends React.Component {

	constructor() {
		super()

		this.state = {
			status: '',
			link: '',
			userName: '',
			password: '',
			disableButton: true
		}

		this.getUserNameAndPassword = this.getUserNameAndPassword.bind(this);
		this.checkPassword = this.checkPassword.bind(this);
	}

	getUserNameAndPassword(event) {
		console.log(event.target.value);
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
					<Card>
						<CardTitle
							title='Login'
							subtitle={this.state.status}>
						</CardTitle>
						<CardText>
						<TextField
			                id='username'
			                type='text'
			                hintText='User Name'
			                floatingLabelText='User Name'
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