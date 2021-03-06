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
 changePetNumMoreState,
 changeDogYesState,
 changeDogNoState,
 changeDogBreedNoState,
 changeDogBreedYesState,
 changeVehicleNum_0State,
 changeVehicleNum_1State,
 changeVehicleNum_2State,
 changeVehicleNumMoreState,
 changeTrailerNumNoState,
 changeTrailerNumYesState,
 changeCheckinDateState,
 changeChosenCabinState,
 changeChosenRvSpaceState
 } from '../../actions/checkinQuestionsActions.js'

import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import RangedDatePicker from '../RangedDatePicker'

@connect((store) => {
  return {
    cabin: store.cabinState.cabin,
    rvSpace: store.rvSpaceState.rvSpace,
    thirtyAmp: store.thirtyAmpState.thirtyAmp,
    fiftyAmp: store.fiftyAmpState.fiftyAmp,
    daily: store.dailyState.daily,
    weekly: store.weeklyState.weekly,
    monthly: store.monthlyState.monthly,
    monthlyStatic: store.monthlyStaticState.monthlyStatic,
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
    petNumMore: store.petNumMoreState.petNumMore,
    dogNo: store.dogNoState.dogNo,
    dogYes: store.dogYesState.dogYes,
    dogBreedNo: store.dogBreedNoState.dogBreedNo,
    dogBreedYes: store.dogBreedYesState.dogBreedYes,
    vehicleNum_0: store.vehicleNum_0State.vehicleNum_0,
    vehicleNum_1: store.vehicleNum_1State.vehicleNum_1,
    vehicleNum_2: store.vehicleNum_2State.vehicleNum_2,
    vehicleNumMore: store.vehicleNumMoreState.vehicleNumMore,
    trailerNumNo: store.trailerNumNoState.trailerNumNo,
    trailerNumYes: store.trailerNumYesState.trailerNumYes,
    chosenCabin: store.chosenCabinState.chosenCabin,
    chosenRvSpace: store.chosenRvSpaceState.chosenRvSpace,
    cabins: store.cabinState.cabins,
    thirtyAmpSpaces: store.cabinState.thirtyAmpSpaces,
    fiftyAmpSpaces: store.cabinState.fiftyAmpSpaces
  };
})

export default class CheckinQuestions extends React.Component {

	constructor() {
		super()

		this.state = {
			daily: false,
			weekly: false,
			monthly: false,
			button: true,
			availableCabins: [],
			available30AmpSpaces: [],
			available50AmpSpaces: [],
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
		this.dogBreedNoState = this.dogBreedNoState.bind(this);
		this.dogBreedYesState = this.dogBreedYesState.bind(this);
		this.vehicleNum_0State = this.vehicleNum_0State.bind(this);
		this.vehicleNum_1State = this.vehicleNum_1State.bind(this);
		this.vehicleNum_2State = this.vehicleNum_2State.bind(this);
		this.vehicleNumMoreState = this.vehicleNumMoreState.bind(this);
		this.trailerNumNoState = this.trailerNumNoState.bind(this);
		this.trailerNumYesState = this.trailerNumYesState.bind(this);
		this.chosenCabinState = this.chosenCabinState.bind(this);
		this.chosenRvSpaceState = this.chosenRvSpaceState.bind(this);
		this.getAvailableCabins = this.getAvailableCabins.bind(this);
		this.getAvailable30AmpRvSpaces = this.getAvailable30AmpRvSpaces.bind(this);
		this.getAvailable50AmpRvSpaces = this.getAvailable50AmpRvSpaces.bind(this);
	}

componentWillMount() {
	this.props.dispatch(changeCabinState(event, false));
	this.props.dispatch(changeRvSpaceState(event, false));
	// console.log('will mount');
}
componentWillUnmount() {
	this.setState({
		daily: false,
		weekly: false,
		monthly: false,
		button: true,
		availableCabins: [],
		available30AmpSpaces: [],
		available50AmpSpaces: [],
		checkin: ''
	});
	// this.props.dispatch(changeCabinState(event, false));
	// this.props.dispatch(changeRvSpaceState(event, false));
	// console.log('unmount');
}

 getAvailableCabins() {
    return axios({
      type: 'GET',
      url: '/availableCabins/'
    }).then((response) => {
      if (response.data == "") {
        // console.log('error!');
      } else {
      	// console.log(response.data);
        this.updateAvailableCabins(response.data);
        }
    });
  }

  formRowCabins(fieldInfo, index) {
    return (
      <Checkbox
        disabled={this.props.cabins}
        label={fieldInfo.meter}
      	name={fieldInfo.meter}
      	key={fieldInfo.meter}
        onCheck={this.chosenCabinState}>
      </Checkbox>
      );
  }

  chosenCabinState(event, isInputChecked){
  	// console.log(event.target.name);
  	this.props.dispatch(changeChosenCabinState(event.target.name, isInputChecked));
  	if(isInputChecked) {
		this.setState({checkin: 'checkin'});
		this.setState({button: false});
	} else {
		this.setState({checkin: ''});
		this.setState({button: true});
	}
  }

  updateAvailableCabins(availableCabinsResponse) {
    this.setState({availableCabins: availableCabinsResponse});
  }

  getAvailable30AmpRvSpaces() {
  	// console.log('30 amp');
  	if (this.props.monthlyStatic){
	    return axios({
	      type: 'GET',
	      url: '/available30Amp/'
	    }).then((response) => {
	      if (response.data == "") {
	        // console.log('error!');
	      } else {
	      	// console.log(response.data);
	        this.updateAvailable30AmpRvSpaces(response.data);
	        }
	    });
	} else {
		return axios({
	      type: 'GET',
	      url: '/available30AmpDailyWeekly/'
	    }).then((response) => {
	      if (response.data == "") {
	        // console.log('error!');
	      } else {
	        this.updateAvailable30AmpRvSpaces(response.data);
	        }
	    });
	}
  }

  formRow30AmpRvSpaces(fieldInfo, index) {
    return (
      <Checkbox
        disabled={this.props.thirtyAmpSpaces}
        label={fieldInfo.meter}
      	name={fieldInfo.meter}
      	key={fieldInfo.meter}
        onCheck={this.chosenRvSpaceState}>
      </Checkbox>
      );
  }

  updateAvailable30AmpRvSpaces(available30AmpSpacesResponse) {
    this.setState({available30AmpSpaces: available30AmpSpacesResponse});
    // console.log(this.state.available30AmpSpaces);
  }

  getAvailable50AmpRvSpaces() {
  	// console.log(this.props.monthlyStatic);
  	if (this.props.monthlyStatic) {
	    return axios({
	      type: 'GET',
	      url: '/available50Amp/'
	    }).then((response) => {
	      if (response.data == "") {
	        // console.log('error!');
	      } else {
	        this.updateAvailable50AmpRvSpaces(response.data);
	        }
	    });
	} else {
		return axios({
	      type: 'GET',
	      url: '/available50AmpDailyWeekly/'
	    }).then((response) => {
	      if (response.data == "") {
	        // console.log('error!');
	      } else {
	        this.updateAvailable50AmpRvSpaces(response.data);
	        }
	    });
	}
  }

  formRow50AmpRvSpaces(fieldInfo, index) {
    return (
      <Checkbox
        disabled={this.props.fiftyAmpSpaces}
        label={fieldInfo.meter}
      	name={fieldInfo.meter}
      	key={fieldInfo.meter}
        onCheck={this.chosenRvSpaceState}>
      </Checkbox>
      );
  }

  chosenRvSpaceState(event, isInputChecked){
  	// console.log(event.target.name);
  	this.props.dispatch(changeChosenRvSpaceState(event.target.name, isInputChecked));
  	if(isInputChecked) {
		this.setState({checkin: 'checkin'});
		this.setState({button: false});
	} else {
		this.setState({checkin: ''});
		this.setState({button: true});
	}
  }

  updateAvailable50AmpRvSpaces(available50AmpSpacesResponse) {
    this.setState({available50AmpSpaces: available50AmpSpacesResponse});
    // console.log(this.state.available50AmpSpaces);
  }

	cabinState(event, isInputChecked) {
		this.getAvailableCabins();
		this.props.dispatch(changeCabinState(event, isInputChecked));
		// console.log(this.props.cabins);
		// console.log(this.props.thirtyAmpSpaces);
		// console.log(this.props.fiftyAmpSpaces);
	}

	rvSpaceState(event, isInputChecked) {
		this.props.dispatch(changeRvSpaceState(event, isInputChecked));
	}

	thirtyAmpState(event, isInputChecked) {
		this.props.dispatch(changeThirtyAmpState(event, isInputChecked));
		this.getAvailable30AmpRvSpaces();
		this.getAvailable50AmpRvSpaces();
	}

	fiftyAmpState(event, isInputChecked) {
		this.props.dispatch(changeFiftyAmpState(event, isInputChecked));
		this.getAvailable30AmpRvSpaces();
		this.getAvailable50AmpRvSpaces();
	}

	dailyState(event, isInputChecked) {
		this.setState({daily: true})
		this.props.dispatch(changeDailyState(event, isInputChecked));
	}

	weeklyState(event, isInputChecked) {
		this.setState({weekly: true});
		this.props.dispatch(changeWeeklyState(event, isInputChecked));
	}

	monthlyState (event, isInputChecked) {
		this.setState({monthly: true});
		this.props.dispatch(changeMonthlyState(event, isInputChecked));
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
		this.props.dispatch(changeDogNoState(event, isInputChecked))
	}

	dogYesState(event, isInputChecked) {
		this.props.dispatch(changeDogYesState(event, isInputChecked))
	}

	dogBreedNoState(event, isInputChecked) {
		this.props.dispatch(changeDogBreedNoState(event, isInputChecked))
	}

	dogBreedYesState(event, isInputChecked) {
		this.props.dispatch(changeDogBreedYesState(event, isInputChecked))
	}

	vehicleNum_0State(event, isInputChecked) {
		this.props.dispatch(changeVehicleNum_0State(event, isInputChecked))
	}

	vehicleNum_1State(event, isInputChecked) {
		this.props.dispatch(changeVehicleNum_1State(event, isInputChecked))
	}

	vehicleNum_2State(event, isInputChecked) {
		this.props.dispatch(changeVehicleNum_2State(event, isInputChecked))
	}

	vehicleNumMoreState(event, isInputChecked) {
		this.props.dispatch(changeVehicleNumMoreState(event, isInputChecked))
			alert('Please call Calhoun\'s at 361 550 7536 to discuss parking options. It is a policy at Calhoun\'s to only allow two vehicles per site.');
	}

	trailerNumNoState(event, isInputChecked) {
		this.props.dispatch(changeTrailerNumNoState(event, isInputChecked))
	}

	trailerNumYesState(event, isInputChecked) {
		this.props.dispatch(changeTrailerNumYesState(event, isInputChecked))
			alert('Please call Calhoun\'s at 361 550 7536 to discuss parking options. It is a policy at Calhoun\'s for trailers to be parked in designated areas.');
	}

	
	render() {
		return(

		  <Row>
	        <Col md={8} offset={{ md: 2 }}>
	          <Card>
	            <CardTitle
	              title='Checkin'
	              subtitle='Please check the appropriate checkbox'
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
					      disabled={this.props.dogNo}
					      onCheck={this.dogNoState}
					    />
					    <Checkbox
					      label="Yes"
					      disabled={this.props.dogYes}
					      onCheck={this.dogYesState}
					    />
					<h3> Is the dog or any of the dogs mixed or full bred with any of the following breeds? </h3>
						<ul>
							<li>Pit Bull Terriers </li>
							<li>Staffordshire Terriers </li>
							<li>Rottweilers  </li>
							<li>German Shepherds  </li>
							<li>Presa Canarios  </li>
							<li>Chows Chows  </li>
							<li>Doberman Pinschers  </li>
							<li>Akitas  </li>
							<li>Wolf-hybrids  </li>
							<li>Mastiffs  </li>
							<li>Cane Corsos  </li>
							<li>Alaskan Malamutes  </li>
							<li>Siberian Huskies  </li>
						</ul>
						<Checkbox
					      label="No"
					      disabled={this.props.dogBreedNo}
					      onCheck={this.dogBreedNoState}
					    />
					    <Checkbox
					      label="Yes"
					      disabled={this.props.dogBreedYes}
					      onCheck={this.dogBreedYesState}
					    />
					<h3> How many vehicles will you have with you to include motorcycles? </h3>
						<Checkbox
						  label="0"
						  disabled={this.props.vehicleNum_0}
						  onCheck={this.vehicleNum_0State}
						/>
						<Checkbox
						  label="1"
						  disabled={this.props.vehicleNum_1}
						  onCheck={this.vehicleNum_1State}
						/>
						<Checkbox
						  label="2"
						  disabled={this.props.vehicleNum_2}
						  onCheck={this.vehicleNum_2State}
						/>
						<Checkbox
						  label="More than 2"
						  disabled={this.props.vehicleNumMore}
						  onCheck={this.vehicleNumMoreState}
						/>
					<h3> Will you have additional vehicles, ex. boats, trailers, etc...</h3>
						<Checkbox
						  label="No"
						  disabled={this.props.trailerNumNo}
						  onCheck={this.trailerNumNoState}
						/>
						<Checkbox
						  label="Yes"
						  disabled={this.props.trailerNumYes}
						  onCheck={this.trailerNumYesState}
						/>
					<h3> Please select an arrival date. </h3>
						<RangedDatePicker
						/>
					<h3> Please select an available 30AMP RV space</h3>
						{this.state.available30AmpSpaces.map((fieldInfo, index) => this.formRow30AmpRvSpaces(fieldInfo, index))}
					<h3> Please select an available 50AMP RV space</h3>
						{this.state.available50AmpSpaces.map((fieldInfo, index) => this.formRow50AmpRvSpaces(fieldInfo, index))}
					<h3> Please select an available Cabin</h3>
						{this.state.availableCabins.map((fieldInfo, index) => this.formRowCabins(fieldInfo, index))}
	            </CardText>
	            <CardActions>
	            <Link to={this.state.checkin}>
	            <RaisedButton
	            	  disabled={this.state.button}
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
