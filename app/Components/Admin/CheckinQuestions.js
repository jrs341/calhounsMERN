import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import RangedDatePicker from '../RangedDatePicker'
import DogDropDown from '../DogDropDown'

export default class CheckinQuestions extends React.Component {

	render() {
		return(
		  <Row>
	        <Col md={8} offset={{ md: 2 }}>
	          <Card>
	            <CardTitle
	              title='title'
	              subtitle='subtitle'
	            />
	            <CardText>
	            	<h3> Are you checking in for a Cabin or RV space </h3>
		                <Checkbox
					      label="Cabin"
					    />
					    <Checkbox
					      label="RV Space"
					    />
					<h3> Please choose a rate </h3>
						<Checkbox
					      label="Daily"
					    />
					    <Checkbox
					      label="Weekly"
					    />
					    <Checkbox
					      label="Monthly"
					    />
					<h3> Please select an arrival date. </h3>
						<RangedDatePicker
						/>
					<h3> How many adults are in your group? </h3>
						<Checkbox
						  label="1"
						/>
						<Checkbox
						  label="2"
						/>
						<Checkbox
						  label="3"
						/>
						<Checkbox
						  label="4"
						/>
					<h3> How many children are in your group? </h3>
						<Checkbox
						  label="1"
						/>
						<Checkbox
						  label="2"
						/>
						<Checkbox
						  label="3"
						/>
						<Checkbox
						  label="4"
						/>
					<h3> Will you have any pets staying with you? </h3>
						<Checkbox
					      label="No"
					    />
					    <Checkbox
					      label="Yes"
					    />
					<h3> How many pets will be staying with you? </h3>
						<Checkbox
						  label="1"
						/>
						<Checkbox
						  label="2"
						/>
					<h3> Are any of the pets a dog or dogs? </h3>
						<Checkbox
					      label="No"
					    />
					    <Checkbox
					      label="Yes"
					    />
					<h3> Is the dog or any of the dogs mixed or full bred with any of the following breeds? </h3>
						<DogDropDown
						/>
					<h3> If not please enter the breed of your dog or dogs </h3>
						<TextField
					      hintText="Breed of Dog 1"
					      floatingLabelText="Breed of Dog 1"
					      floatingLabelFixed={true}
					    /><br />
					    <TextField
					      hintText="Breed of Dog 2"
					      floatingLabelText="Breed of Dog 2"
					      floatingLabelFixed={true}
					    /><br />
					<h3> How many vehicles will you have with you to include motorcycles? </h3>
						<Checkbox
						  label="1"
						/>
						<Checkbox
						  label="2"
						/>

					<h3> Will you have additional vehicles, ex. boats, trailers, etc...</h3>
						<Checkbox
						  label="No"
						/>
						<Checkbox
						  label="Yes"
						/>
	            </CardText>
	            <CardActions>
	            <Link to={'Checkin'}>
	            <RaisedButton
	                  label="Next"
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