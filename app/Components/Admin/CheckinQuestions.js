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
			hellNo: true,
			cabin: false,
			rvSpace: false,
			thirtyAmp: false,
			fiftyAmp: false,
			daily: false,
			weekly: false,
			monthly: false,
			adultNum_0: false,
			adultNum_1: false,
			adultNum_2: false,
			adultNum_3: false,
			childNum_0: false,
			childNum_1: false,
			childNum_2: false,
			childNum_3: false,
			petNo: false,
			petYes: false,
			petNumNone: false,
			petNum_1: true,
			petNum_2: true,
			petNumMore: true,
			dogNo: true,
			dogYes: true,
			dogDropDown: true,
			breed_1: true,
			breed_2: true,
			vehicleNumOk: false,
			vehicleNumMore: false,
			trailerNumNo: true,
			trailerNumYes: true,
			chooseRvSpace: true,
			chooseCabin: true,
			checkin: ''
		}

		this.CabinState = this.CabinState.bind(this);
		this.rvSpaceState = this.rvSpaceState.bind(this);
		this.thirtyAmpState = this.thirtyAmpState.bind(this);
		this.fiftyAmpState = this.fiftyAmpState.bind(this);
		this.dailyState = this.dailyState.bind(this);
		this.weeklyState = this.weeklyState.bind(this);
		this.monthlyState = this.monthlyState.bind(this);
		this.adultNum_0 = this.adultNum_0.bind(this);
		this.adultNum_1 = this.adultNum_1.bind(this);
		this.adultNum_2 = this.adultNum_2.bind(this);
		this.adultNum_3 = this.adultNum_3.bind(this);
		this.childNum_0 = this.childNum_0.bind(this);
		this.childNum_1 = this.childNum_1.bind(this);
		this.childNum_2 = this.childNum_2.bind(this);
		this.childNum_3 = this.childNum_3.bind(this);
		this.petNoState = this. petNoState.bind(this);
		this.petYesState = this.petYesState.bind(this);
		this.petNum_1State = this.petNum_1State.bind(this);
		this.petNum_2State = this.petNum_2State.bind(this);
		this.petNumMoreState = this.petNumMoreState.bind(this);
		this.dogNoState = this.dogNoState.bind(this);
		this.dogYesState = this.dogYesState.bind(this);
		this.vehicleNumOk = this.vehicleNumOk.bind(this);
		this.vehicleNumMore = this.vehicleNumMore.bind(this);
		this.trailerNumNo = this.trailerNumNo.bind(this);
		this.trailerNumYes = this.trailerNumYes.bind(this);
		this.chooseCabinState = this.chooseCabinState.bind(this);
		this.chooseRvSpaceState = this. chooseRvSpaceState.bind(this);
	}

	CabinState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({rvSpace: true});
			this.setState({petYes: true});
			this.setState({thirtyAmp: true});
			this.setState({fiftyAmp: true});
		}else{
			this.setState({cabin: false});
			this.setState({rvSpace: false});
			this.setState({petYes: false});
			this.setState({thirtyAmp: false});
			this.setState({fiftyAmp: false});
		}
	}

	rvSpaceState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({cabin: true});
		}else{
			this.setState({rvSpace: false});
			this.setState({cabin: false});
		}
	}

	thirtyAmpState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({fiftyAmp: true});
		}else{
			this.setState({thirtyAmp: false});
			this.setState({fiftyAmp: false});
		}
	}

	fiftyAmpState(event, isInputChecked) {
		if(isInputChecked){
			this.setState({thirtyAmp: true});
		}else{
			this.setState({thirtyAmp: false});
			this.setState({fiftyAmp: false});
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

	monthlyState (event, isInputChecked) {
		if(isInputChecked){
			this.setState({daily: true});
			this.setState({weekly: true});
		}else{
			this.setState({monthly: false});
			this.setState({daily: false});
			this.setState({weekly: false});
		}
	}

	adultNum_0(event, isInputChecked) {
		if(isInputChecked){
			this.setState({adultNum_1: true});
			this.setState({adultNum_2: true});
			this.setState({adultNum_3: true});
		}else{
			this.setState({adultNum_0: false});
			this.setState({adultNum_1: false});
			this.setState({adultNum_2: false});
			this.setState({adultNum_3: false});
		}	
	}

	adultNum_1(event, isInputChecked) {
		if(isInputChecked){
			this.setState({adultNum_0: true});
			this.setState({adultNum_2: true});
			this.setState({adultNum_3: true});
		}else{
			this.setState({adultNum_0: false});
			this.setState({adultNum_1: false});
			this.setState({adultNum_2: false});
			this.setState({adultNum_3: false});
		}	
	}

	adultNum_2(event, isInputChecked) {
		if(isInputChecked){
			this.setState({adultNum_0: true});
			this.setState({adultNum_1: true});
			this.setState({adultNum_3: true});
		}else{
			this.setState({adultNum_0: false});
			this.setState({adultNum_1: false});
			this.setState({adultNum_2: false});
			this.setState({adultNum_3: false});
		}	
	}

	adultNum_3(event, isInputChecked) {
		if(isInputChecked){
			this.setState({adultNum_0: true});
			this.setState({adultNum_1: true});
			this.setState({adultNum_2: true});
		}else{
			this.setState({adultNum_0: false});
			this.setState({adultNum_1: false});
			this.setState({adultNum_2: false});
			this.setState({adultNum_3: false});
		}	
	}

	childNum_0(event, isInputChecked) {
		if(isInputChecked){
			this.setState({childNum_1: true});
			this.setState({childNum_2: true});
			this.setState({childNum_3: true});
		}else{
			this.setState({childNum_0: false});
			this.setState({childNum_1: false});
			this.setState({childNum_2: false});
			this.setState({childNum_3: false});
		}	
	}

	childNum_1(event, isInputChecked) {
		if(isInputChecked){
			this.setState({childNum_0: true});
			this.setState({childNum_2: true});
			this.setState({childNum_3: true});
		}else{
			this.setState({childNum_0: false});
			this.setState({childNum_1: false});
			this.setState({childNum_2: false});
			this.setState({childNum_3: false});
		}	
	}

	childNum_2(event, isInputChecked) {
		if(isInputChecked){
			this.setState({childNum_0: true});
			this.setState({childNum_1: true});
			this.setState({childNum_3: true});
		}else{
			this.setState({childNum_0: false});
			this.setState({childNum_1: false});
			this.setState({childNum_2: false});
			this.setState({childNum_3: false});
		}	
	}

	childNum_3(event, isInputChecked) {
		if(isInputChecked){
			this.setState({childNum_0: true});
			this.setState({childNum_1: true});
			this.setState({childNum_2: true});
		}else{
			this.setState({childNum_0: false});
			this.setState({childNum_1: false});
			this.setState({childNum_2: false});
			this.setState({childNum_3: false});
		}	
	}
	
	petNoState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({petYes: true});
		}else{
			if(!this.state.cabin) {
				this.setState({petYes: true});
				this.setState({chooseCabin: true});
			}else{
				this.setState({petYes: false});
			}
		}
	}

	petYesState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({petNo: true});
			this.setState({petNum_1: false});
			this.setState({petNum_2: false});
			this.setState({petNumMore: false});
			this.setState({dogNo: false});
			this.setState({dogYes: false});
			this.setState({chooseCabin: true});
		}else{
			this.setState({petNo: false});
			this.setState({petNum_1: true});
			this.setState({petNum_2: true});
			this.setState({petNumMore: true});
			this.setState({dogNo: true});
			this.setState({dogYes: true});
		}
	}

	petNum_1State(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({petNum_2: true});
			this.setState({petNumMore: true});
			this.setState({petYes: true});
		}else{
			this.setState({petNum_2: false});
			this.setState({petNumMore: false});
			this.setState({petYes: false});
		}
	}

	petNum_2State(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({petNum_1: true});
			this.setState({petNumMore: true});
			this.setState({petYes: true});
		}else{
			this.setState({petNum_1: false});
			this.setState({petNumMore: false});
			this.setState({petYes: false});
		}
	}

	petNumMoreState(event, isInputChecked){
		if(isInputChecked){
			this.setState({hellNo: true});
			this.setState({petNum_1: true});
			this.setState({petNum_2: true});
			this.setState({dogNo: true});
			this.setState({dogYes: true});
			this.setState({petYes: true});
			alert('It is policy at Calhoun\'s Riverside RV Retreat to limit the number of pets to a maximum of 2 per RV space');
		}else{
			this.setState({petNum_1: false});
			this.setState({petNum_2: false});
			this.setState({dogNo: false});
			this.setState({dogYes: false});
			this.setState({petYes: false});
		}
	}

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

	vehicleNumMore(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({vehicleNumOk: true});
			alert('Please call Calhoun\'s at 361 550 7536 to discuss parking options. It is a policy at Calhoun\'s to only allow two vehicles per site.');
		}else{
			this.setState({vehicleNumMore: false});
			this.setState({vehicleNumOk: false});
		}
	}

	vehicleNumOk(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({vehicleNumMore: true});
			this.setState({trailerNumNo: false});
			this.setState({trailerNumYes: false});
		}else{
			this.setState({vehicleNumOk: false});
			this.setState({vehicleNumMore: false});
			this.setState({trailerNumNo: true});
			this.setState({trailerNumYes: true});
		}
	}

	trailerNumNo(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({trailerNumYes: true});
			this.setState({checkin: 'checkin'});
			this.setState({hellNo: false});
				if(this.state.cabin){
					this.setState({chooseRvSpace: false});
				}else{
					this.setState({chooseCabin: false});
				}
		}else{
			this.setState({trailerNumYes: false});
			this.setState({checkin: ''});
			this.setState({hellNo: true});
			this.setState({chooseCabin: true});
			this.setState({chooseRvSpace: true});
		}
	}

	trailerNumYes(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({trailerNumNo: true});
			alert('Please call Calhoun\'s at 361 550 7536 to discuss parking options. It is a policy at Calhoun\'s for trailers to be parked in designated areas.');
		}else{
			this.setState({trailerNumNo: false});
			this.setState({trailerNumYes: false});
		}
	}

	chooseCabinState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({checkin: 'checkin'});
			this.setState({hellNo: false});
		}else{
			this.setState({checkin: ''});
			this.setState({hellNo: true});
		}
	}

	chooseRvSpaceState(event, isInputChecked) {
		if(isInputChecked) {
			this.setState({checkin: 'checkin'});
			this.setState({hellNo: false});
		}else{
			this.setState({checkin: ''});
			this.setState({hellNo: true});
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
					      onCheck={this.CabinState}
					    />
					    <Checkbox
					      label="RV Space"
					      disabled={this.state.rvSpace}
					      onCheck={this.rvSpaceState}
					    />
					<h3> What size plug does your RV use? </h3>
		                <Checkbox
					      label="30 AMP"
					      disabled={this.state.thirtyAmp}
					      onCheck={this.thirtyAmpState}
					    />
					    <Checkbox
					      label="50 AMP"
					      disabled={this.state.fiftyAmp}
					      onCheck={this.fiftyAmpState}
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
					<h3> How many additional adults, other than you, are in your group? </h3>
						<Checkbox
						  label="0"
						  disabled={this.state.adultNum_0}
						  onClick={this.adultNum_0}
						/>
						<Checkbox
						  label="1"
						  disabled={this.state.adultNum_1}
						  onClick={this.adultNum_1}
						/>
						<Checkbox
						  disabled={this.state.adultNum_2}
						  label="2"
						  onClick={this.adultNum_2}
						/>
						<Checkbox
						  disabled={this.state.adultNum_3}
						  label="3"
						  onClick={this.adultNum_3}
						/>
					<h3> How many children are in your group? </h3>
						<Checkbox
						  label="0"
						  disabled={this.state.childNum_0}
						  onClick={this.childNum_0}
						/>
						<Checkbox
						  disabled={this.state.childNum_1}
						  label="1"
						  onClick={this.childNum_1}
						/>
						<Checkbox
						  disabled={this.state.childNum_2}
						  label="2"
						  onClick={this.childNum_2}
						/>
						<Checkbox
						  disabled={this.state.childNum_3}
						  label="3"
						  onClick={this.childNum_3}
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
						  onCheck={this.petNum_1State}
						/>
						<Checkbox
						  label="2"
						  disabled={this.state.petNum_2}
						  onCheck={this.petNum_2State}
						/>
						<Checkbox
						  label="More than 2"
						  disabled={this.state.petNumMore}
						  onCheck={this.petNumMoreState}
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
					<h3> Is the dog or any of the dogs mixed or full bred with any of the following breeds? If not please select none of the above from the menu. </h3>
						<DogDropDown
						disabled={this.state.dogDropDown}
						/>
					<h3> If not please enter the breed of your dog or dogs in the fields below</h3>
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
						  disabled={this.state.vehicleNumOk}
						  onCheck={this.vehicleNumOk}
						/>
						<Checkbox
						  label="2"
						  disabled={this.state.vehicleNumOk}
						  onCheck={this.vehicleNumOk}
						/>
						<Checkbox
						  label="More than 2"
						  disabled={this.state.vehicleNumMore}
						  onCheck={this.vehicleNumMore}
						/>
					<h3> Will you have additional vehicles, ex. boats, trailers, etc...</h3>
						<Checkbox
						  label="No"
						  disabled={this.state.trailerNumNo}
						  onCheck={this.trailerNumNo}
						/>
						<Checkbox
						  label="Yes"
						  disabled={this.state.trailerNumYes}
						  onCheck={this.trailerNumYes}
						/>
					<h3> Please select an available RV space</h3>
						<Checkbox
						  label="RV Space"
						  disabled={this.state.chooseRvSpace}
						  onCheck={this.chooseRvSpaceState}
						/>
					<h3> Please select an available Cabin</h3>
						<Checkbox
						  label="Cabin"
						  disabled={this.state.chooseCabin}
						  onCheck={this.chooseCabinState}
						/>
	            </CardText>
	            <CardActions>
	            <Link to={this.state.checkin}>
	            <RaisedButton
	            	  disabled={this.state.hellNo}
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
