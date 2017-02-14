import React from 'react'
import { connect } from "react-redux"

import { changeCabinState,
 changeRvSpaceState,
 changeThirtyAmpState,
 changeFiftyAmpState,
 changeDailyState,
 changeWeeklyState,
 changeMonthlyState,
 changeAdultNum_0State,
 changeAdultNum_1State,
 changeAdultNum_2State,
 changeAdultNum_3State,
 changeChildNum_0State,
 changeChildNum_1State,
 changeChildNum_2State,
 changeChildNum_3State,
 changePetYesState,
 changePetNoState,
 changePetNum_1State,
 changePetNum_2State,
 changePetNumMoreState
 } from '../../actions/checkinQuestionsActions.js'

import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import RangedDatePicker from '../RangedDatePicker'
import DogDropDown from '../DogDropDown'

@connect((store) => {
  return {
    cabin: store.cabinState.cabin,
    rvSpace: store.rvSpaceState.rvSpace,
    thirtyAmp: store.thirtyAmpState.thirtyAmp,
    fiftyAmp: store.fiftyAmpState.fiftyAmp,
    daily: store.dailyState.daily,
    weekly: store.weeklyState.weekly,
    monthly: store.monthlyState.monthly,
    adultNum_0: store.adultNum_0State.adultNum_0,
    adultNum_1: store.adultNum_1State.adultNum_1,
    adultNum_2: store.adultNum_2State.adultNum_2,
    adultNum_3: store.adultNum_3State.adultNum_3,
    childNum_0: store.childNum_0State.childNum_0,
    childNum_1: store.childNum_1State.childNum_1,
    childNum_2: store.childNum_2State.childNum_2,
    childNum_3: store.childNum_3State.childNum_3,
    petNo: store.petNoState.petNo,
    petYes: store.petYesState.petYes,
    petNum_1: store.petNum_1State.petNum_1,
    petNum_2: store.petNum_2State.petNum_2,
    petNumMore: store.petNumMoreState.petNumMore
  };
})

export default class CheckinQuestions extends React.Component {

	constructor() {
		super()

		this.state = {
			hellNo: true,
			// petNumNone: false,
			// petNum_1: true,
			// petNum_2: true,
			// petNumMore: true,
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

		this.cabinState = this.cabinState.bind(this);
		this.rvSpaceState = this.rvSpaceState.bind(this);
		this.thirtyAmpState = this.thirtyAmpState.bind(this);
		this.fiftyAmpState = this.fiftyAmpState.bind(this);
		this.dailyState = this.dailyState.bind(this);
		this.weeklyState = this.weeklyState.bind(this);
		this.monthlyState = this.monthlyState.bind(this);
		this.adultNum_0State = this.adultNum_0State.bind(this);
		this.adultNum_1State = this.adultNum_1State.bind(this);
		this.adultNum_2State = this.adultNum_2State.bind(this);
		this.adultNum_3State = this.adultNum_3State.bind(this);
		this.childNum_0State = this.childNum_0State.bind(this);
		this.childNum_1State = this.childNum_1State.bind(this);
		this.childNum_2State = this.childNum_2State.bind(this);
		this.childNum_3State = this.childNum_3State.bind(this);
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

	cabinState(event, isInputChecked) {
		this.props.dispatch(changeCabinState(event, isInputChecked))
	}

	rvSpaceState(event, isInputChecked) {
		this.props.dispatch(changeRvSpaceState(event, isInputChecked))
	}

	thirtyAmpState(event, isInputChecked) {
		this.props.dispatch(changeThirtyAmpState(event, isInputChecked))
	}

	fiftyAmpState(event, isInputChecked) {
		this.props.dispatch(changeFiftyAmpState(event, isInputChecked))
	}

	dailyState(event, isInputChecked) {
		this.props.dispatch(changeDailyState(event, isInputChecked))
	}

	weeklyState(event, isInputChecked) {
		this.props.dispatch(changeWeeklyState(event, isInputChecked))
	}

	monthlyState (event, isInputChecked) {
		this.props.dispatch(changeMonthlyState(event, isInputChecked))
	}

	adultNum_0State(event, isInputChecked) {
		this.props.dispatch(changeAdultNum_0State(event, isInputChecked))
	}

	adultNum_1State(event, isInputChecked) {
		this.props.dispatch(changeAdultNum_1State(event, isInputChecked))
	}

	adultNum_2State(event, isInputChecked) {
		this.props.dispatch(changeAdultNum_2State(event, isInputChecked))
	}

	adultNum_3State(event, isInputChecked) {
		this.props.dispatch(changeAdultNum_3State(event, isInputChecked))
	}

	childNum_0State(event, isInputChecked) {
		this.props.dispatch(changeChildNum_0State(event, isInputChecked))
	}

	childNum_1State(event, isInputChecked) {
		this.props.dispatch(changeChildNum_1State(event, isInputChecked))
	}

	childNum_2State(event, isInputChecked) {
		this.props.dispatch(changeChildNum_2State(event, isInputChecked))
	}

	childNum_3State(event, isInputChecked) {
		this.props.dispatch(changeChildNum_3State(event, isInputChecked))
	}
	
	petNoState(event, isInputChecked) {
		this.props.dispatch(changePetNoState(event, isInputChecked))
	}

	petYesState(event, isInputChecked) {
		this.props.dispatch(changePetYesState(event, isInputChecked))
	}

	petNum_1State(event, isInputChecked) {
		this.props.dispatch(changePetNum_1State(event, isInputChecked))
	}

	petNum_2State(event, isInputChecked) {
		this.props.dispatch(changePetNum_2State(event, isInputChecked))
	}

	petNumMoreState(event, isInputChecked){
		this.props.dispatch(changePetNumMoreState(event, isInputChecked))
			alert('It is policy at Calhoun\'s Riverside RV Retreat to limit the number of pets to a maximum of 2 per RV space');
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
					      disabled={this.props.cabin}
					      onCheck={this.cabinState}
					    />
					    <Checkbox
					      label="RV Space"
					      disabled={this.props.rvSpace}
					      onCheck={this.rvSpaceState}
					    />
					<h3> What size plug does your RV use? </h3>
		                <Checkbox
					      label="30 AMP"
					      disabled={this.props.thirtyAmp}
					      onCheck={this.thirtyAmpState}
					    />
					    <Checkbox
					      label="50 AMP"
					      disabled={this.props.fiftyAmp}
					      onCheck={this.fiftyAmpState}
					    />
					<h3> Please choose a rate </h3>
						<Checkbox
					      label="Daily"
					      disabled={this.props.daily}
					      onCheck={this.dailyState}
					    />
					    <Checkbox
					      label="Weekly"
					      disabled={this.props.weekly}
					      onCheck={this.weeklyState}
					    />
					    <Checkbox
					      label="Monthly"
					      disabled={this.props.monthly}
					      onCheck={this.monthlyState}
					    />
					
					<h3> How many additional adults, other than you, are in your group? </h3>
						<Checkbox
						  label="0"
						  disabled={this.props.adultNum_0}
						  onCheck={this.adultNum_0State}
						/>
						<Checkbox
						  label="1"
						  disabled={this.props.adultNum_1}
						  onCheck={this.adultNum_1State}
						/>
						<Checkbox
						  disabled={this.props.adultNum_2}
						  label="2"
						  onCheck={this.adultNum_2State}
						/>
						<Checkbox
						  disabled={this.props.adultNum_3}
						  label="3"
						  onCheck={this.adultNum_3State}
						/>
					<h3> How many children are in your group? </h3>
						<Checkbox
						  label="0"
						  disabled={this.props.childNum_0}
						  onCheck={this.childNum_0State}
						/>
						<Checkbox
						  disabled={this.props.childNum_1}
						  label="1"
						  onCheck={this.childNum_1State}
						/>
						<Checkbox
						  disabled={this.props.childNum_2}
						  label="2"
						  onCheck={this.childNum_2State}
						/>
						<Checkbox
						  disabled={this.props.childNum_3}
						  label="3"
						  onCheck={this.childNum_3State}
						/>
					<h3> Will you have any pets staying with you? </h3>
						<Checkbox
					      label="No"
					      disabled={this.props.petNo}
					      onCheck={this.petNoState}
					    />
					    <Checkbox
					      label="Yes"
					      disabled={this.props.petYes}
					      onCheck={this.petYesState}
					    />
					<h3> How many pets will be staying with you? </h3>
						<Checkbox
						  label="1"
						  disabled={this.props.petNum_1}
						  onCheck={this.petNum_1State}
						/>
						<Checkbox
						  label="2"
						  disabled={this.props.petNum_2}
						  onCheck={this.petNum_2State}
						/>
						<Checkbox
						  label="More than 2"
						  disabled={this.props.petNumMore}
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
					<h3> Please select an arrival date. </h3>
						<RangedDatePicker
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
