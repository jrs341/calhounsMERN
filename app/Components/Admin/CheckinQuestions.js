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

	constructor() {
		super()

		this.state = {
			cabin: false,
			rvSpace: false,
			daily: false,
			weekly: false,
			monthly: false,
			petNo: false,
			petYes: false,
			petNum_1: true,
			petNum_2: true,
			dogNo: true,
			dogYes: true,
			dogDropDown: true,
			breed_1: true,
			breed_2: true
		}

		this.cabinState = this.cabinState.bind(this);
		this.rvSpaceState = this.rvSpaceState.bind(this);
		this.dailyState = this.dailyState.bind(this);
		this.weeklyState = this.weeklyState.bind(this);
		this.monthlyState = this.monthlyState.bind(this);
		this.petNoState = this. petNoState.bind(this);
		this.petYesState = this.petYesState.bind(this);
		this.dogNoState = this.dogNoState.bind(this);
		this.dogYesState = this.dogYesState.bind(this);
	}

	cabinState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({rvSpace: true});
		}else{
			this.setState({cabin: false});
			this.setState({rvSpace: false});
		}
	}

	rvSpaceState(event, isInputChecked) {
		if(isInputChecked){
			
		}else{
			this.setState({rvSpace: false});
			this.setState({cabin: false});
		}
	}

	dailyState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({weekly: true});
			this.setState({monthly: true});
		}else{
			this.setState({daily: false});
			this.setState({weekly: false});
			this.setState({monthly: false});
		}
	}

	weeklyState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({daily: true});
			this.setState({monthly: true});
		}else{
			this.setState({weekly: false});
			this.setState({daily: false});
			this.setState({monthly: false});
		}
	}

	monthlyState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({daily: true});
			this.setState({weekly: true});
		}else{
			this.setState({monthly: false});
			this.setState({daily: false});
			this.setState({weekly: false});
		}
	}

	petNoState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({petYes: true});
		}else{
			this.setState({petYes: false});
		}
	}

	petYesState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({petNo: true});
			this.setState({petNum_1: false});
			this.setState({petNum_2: false});
			this.setState({dogNo: false});
			this.setState({dogYes: false});
		}else{
			this.setState({petNo: false});
			this.setState({petNum_1: true});
			this.setState({petNum_2: true});
			this.setState({dogNo: true});
			this.setState({dogYes: true});
		}
	}

	// petNumState(event, isInputChecked) {
	// 	if(isInputChecked) {
	// 		this.setState({petNum_1: false});
	// 		this.setState({petNum_2: true});
	// 	}
	// }

	dogNoState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({dogYes: true});
		}else{
			this.setState({dogYes: false});
		}
	}

	dogYesState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({dogNo: true});
			this.setState({dogDropDown: false});
			this.setState({breed_1: false});
			this.setState({breed_2: false});
		}else{
			this.setState({dogYes: false});
			this.setState({dogNo: false});
			this.setState({dogDropDown: true});
			this.setState({breed_1: true});
			this.setState({breed_2: true});
		}
	}

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
					      disabled={this.state.cabin}
					      onCheck={this.cabinState}
					    />
					    <Checkbox
					      label="RV Space"
					      disabled={this.state.rvSpace}
					      onCheck={this.rvSpaceState}
					    />
					<h3> Please choose a rate </h3>
						<Checkbox
					      label="Daily"
					      disabled={this.state.daily}
					      onCheck={this.dailyState}
					    />
					    <Checkbox
					      label="Weekly"
					      disabled={this.state.weekly}
					      onCheck={this.weeklyState}
					    />
					    <Checkbox
					      label="Monthly"
					      disabled={this.state.monthly}
					      onCheck={this.monthlyState}
					    />
					<h3> Please select an arrival date. </h3>
						<RangedDatePicker
						/>
					<h3> How many additional adults other than you are in your group? </h3>
						<Checkbox
						  label="0"
						/>
						<Checkbox
						  label="1"
						/>
						<Checkbox
						  label="2"
						/>
						<Checkbox
						  label="3"
						/>
					<h3> How many children are in your group? </h3>
						<Checkbox
						  label="0"
						/>
						<Checkbox
						  label="1"
						/>
						<Checkbox
						  label="2"
						/>
						<Checkbox
						  label="3"
						/>
					<h3> Will you have any pets staying with you? </h3>
						<Checkbox
					      label="No"
					      disabled={this.state.petNo}
					      onCheck={this.petNoState}
					    />
					    <Checkbox
					      label="Yes"
					      disabled={this.state.petYes}
					      onCheck={this.petYesState}
					    />
					<h3> How many pets will be staying with you? </h3>
						<Checkbox
						  label="1"
						  disabled={this.state.petNum_1}
						/>
						<Checkbox
						  label="2"
						  disabled={this.state.petNum_2}
						/>
					<h3> Are any of the pets a dog or dogs? </h3>
						<Checkbox
					      label="No"
					      disabled={this.state.dogNo}
					      onCheck={this.dogNoState}
					    />
					    <Checkbox
					      label="Yes"
					      disabled={this.state.dogYes}
					      onCheck={this.dogYesState}
					    />
					<h3> Is the dog or any of the dogs mixed or full bred with any of the following breeds? </h3>
						<DogDropDown
						disabled={this.state.dogDropDown}
						/>
					<h3> If not please enter the breed of your dog or dogs </h3>
						<TextField
						  disabled={this.state.breed_1}
					      hintText="Breed of Dog 1"
					      floatingLabelText="Breed of Dog 1"
					      floatingLabelFixed={true}
					    /><br />
					    <TextField
					      disabled={this.state.breed_2}
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