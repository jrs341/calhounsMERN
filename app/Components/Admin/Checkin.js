import React from 'react'
import { connect } from "react-redux"

import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const displayBlock = {
  display: 'inlineBlock',
  width: 200
}
const emailSearchField = {
  display: 'block'
}

const submitButton = {
  width: 200
}

var postRoute = '/submitCustomer';

var foundCustomer = false;

@connect((store) => {
  return {
    cabin: store.cabinStaticState.cabinStatic,
    rvSpace: store.rvSpaceStaticState.rvSpaceStatic,
    thirtyAmp: store.thirtyAmpStaticState.thirtyAmpStatic,
    fiftyAmp: store.fiftyAmpStaticState.fiftyAmpStatic,
    daily: store.dailyStaticState.dailyStatic,
    weekly: store.weeklyStaticState.weeklyStatic,
    monthly: store.monthlyStaticState.monthlyStatic,
    adultNum_0: store.adultNum_0StaticState.adultNum_0Static,
    adultNum_1: store.adultNum_1StaticState.adultNum_1Static,
    adultNum_2: store.adultNum_2StaticState.adultNum_2Static,
    adultNum_3: store.adultNum_3StaticState.adultNum_3Static,
    childNum_0: store.childNum_0StaticState.childNum_0Static,
    childNum_1: store.childNum_1StaticState.childNum_1Static,
    childNum_2: store.childNum_2StaticState.childNum_2Static,
    childNum_3: store.childNum_3StaticState.childNum_3Static,
    petNo: store.petNoStaticState.petNoStatic,
    petYes: store.petYesStaticState.petYesStatic,
    dogNo: store.dogNoStaticState.dogNoStatic,
    dogYes: store.dogYesStaticState.dogYesStatic,
    vehicleNum_0: store.vehicleNum_0StaticState.vehicleNum_0Static,
    vehicleNum_1: store.vehicleNum_1StaticState.vehicleNum_1Static,
    vehicleNum_2: store.vehicleNum_2StaticState.vehicleNum_2Static,
    checkInDate: store.checkInDateStaticState.checkInDateStatic,
    checkOutDate: store.checkOutDateStaticState.checkOutDateStatic,
    chosenCabin: store.chosenCabinState.chosenCabin,
    chosenRvSpace: store.chosenRvSpaceState.chosenRvSpace
  };
})

export default class Checkin extends React.Component {

  constructor(props) {
    super(props)
    this.inputFieldInfo = [
    {displayName: 'First Name', dataName: 'given_name', state: true}, 
    {displayName: 'Last Name', dataName: 'family_name', state: true}, 
    {displayName: 'Phone Number', dataName: 'phone_number', state: true}, 
    {displayName: 'Email Address', dataName: 'email', state: true}, 
    {displayName: 'Address Line 1', dataName: 'address_line_1', state: true}, 
    {displayName: 'City', dataName: 'locality', state: true}, 
    {displayName: 'State', dataName: 'administrative_district_level_1', state: true}, 
    {displayName: 'Postal Code', dataName: 'postal_code', state: true}, 
    {displayName: 'Country', dataName: 'country', state: false},
    {displayName: 'Drivers License Number', dataName: 'drivers_license_num', state: true},
    {displayName: 'Drivers License State', dataName: 'drivers_license_state', state: true},
    {displayName: 'Additional Occupant 1', dataName: 'additional_occupant_1', state: this.props.adultNum_1},
    {displayName: 'Additional Occupant 1 Age', dataName: 'additional_occupant_1_age', state: this.props.adultNum_1},
    {displayName: 'Additional Occupant 2', dataName: 'additional_occupant_2', state: this.props.adultNum_2},
    {displayName: 'Additional Occupant 2 Age', dataName: 'additional_occupant_2_age', state: this.props.adultNum_2},
    {displayName: 'Additional Occupant 3', dataName: 'additional_occupant_3',state: this.props.adultNum_3},
    {displayName: 'Additional Occupant 3 Age', dataName: 'additional_occupant_3_age', state: this.props.adultNum_3},
    {displayName: 'Children Name or Names', dataName: 'additional_occupant_4',state: this.props.childNum_1},
    {displayName: 'Children Age or Ages', dataName: 'additional_occupant_4_age', state: this.props.childNum_1},
    {displayName: 'Number of Pets', dataName: 'pets_number_of', state: this.props.petYes},
    {displayName: 'Type of Pets', dataName: 'pets_type', state: this.props.petYes},
    {displayName: 'Breed of Dog', dataName: 'pets_breed', state: this.props.dogYes},
    {displayName: 'RV Type', dataName: 'unit_type', state: this.props.rvSpace},
    {displayName: 'RV License Plate Number', dataName: 'unit_license', state: this.props.rvSpace},
    {displayName: 'RV License Plate State', dataName: 'unit_state', state: this.props.rvSpace},
    {displayName: 'RV Year', dataName: 'unit_year', state: this.props.rvSpace},
    {displayName: 'RV Length', dataName: 'unit_length', state: this.props.rvSpace},
    {displayName: 'Vehicle 1 Type', dataName: 'vehicle_1_type', state: true},
    {displayName: 'Vehicle 1 License Plate Number', dataName: 'vehicle_1_license', state: this.props.vehicleNum_1},
    {displayName: 'Vehicle 1 License Plate State', dataName: 'vehicle_1_state', state: this.props.vehicleNum_1},
    {displayName: 'Vehicle 1 Year', dataName: 'vehicle_1_year', state: this.props.vehicleNum_1},
    {displayName: 'Vehicle 2 Type', dataName: 'vehicle_2_type', state: this.props.vehicleNum_2},
    {displayName: 'Vehicle 2 License Plate Number', dataName: 'vehicle_2_license', state: this.props.vehicleNum_2},
    {displayName: 'Vehicle 2 License Plate State', dataName: 'vehicle_2_state', state: this.props.vehicleNum_2},
    {displayName: 'Vehicle 2 Year', dataName: 'vehicle_2_year', state: this.props.vehicleNum_2}
    // {displayName: 'Meter', dataName: 'meter', state: false},
    // {displayName: 'Meter Reading', dataName: 'meterReading', state: false},
    // {displayName: 'Checkin Date', dataName: 'checkInDate', state: false},
    // {displayName: 'Checkout Date', dataName: 'checkOutDate', state: false},
    ];
    
    this.state = {
      process: 'Checkin',
      searchEmailInput: '',
      searchResponse: {},
      searchResultInfo: 'Please enter your email address to search our records for your information or fill out the new customer form.',
      postRoute: '/submitCustomer',
      meter:'',
      meterReading: ''
    }

    this.updateSearchEmailInput = this.updateSearchEmailInput.bind(this);
    this.updateSearchResponse = this.updateSearchResponse.bind(this);
    this.searchEmail = this.searchEmail.bind(this);
    this.updateSearchResultInfo = this.updateSearchResultInfo.bind(this);
    this.updateFormRow = this.updateFormRow.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  componentWillMount(props) {
    if (this.props.chosenCabin != 'none') {
      this.setState({meter: this.props.chosenCabin});
    } else {
      this.setState({meter: this.props.chosenRvSpace});
    }
    return axios({
          type: 'GET',
          url: '/lastMeterReading/' + this.props.chosenRvSpace
        }).then((response)=> {
          // console.log(response.data[0].reading[response.data[0].reading.length-1].reading);
          this.setState({meterReading: response.data[0].reading[response.data[0].reading.length-1].reading});
        });
  }

  formRow(fieldInfo) {
    if (foundCustomer) {
      return (
        <TextField
          name={fieldInfo.dataName}
          key={fieldInfo.dataName}
          value={this.state.searchResponse[fieldInfo.dataName]}
          hintText={fieldInfo.displayName}
          floatingLabelText={fieldInfo.displayName}
          onChange={this.updateFormRow}>
        </TextField>
        );
    } else if (fieldInfo.state) {
      return (
        <TextField
          name={fieldInfo.dataName}
          key={fieldInfo.dataName}
          errorText='Required'
          value={this.state.searchResponse[fieldInfo.dataName]}
          hintText={fieldInfo.displayName}
          floatingLabelText={fieldInfo.displayName}
          onChange={this.updateFormRow}>
        </TextField>
        );
    }
  }

  updateSearchEmailInput(event, newInput) {
    this.setState({searchEmailInput: newInput});
  }

  updateSearchResponse(searchResponse) {
    this.setState({searchResponse: searchResponse});
  }

  updateSearchResultInfo(searchResultInfo) {
    this.setState({searchResultInfo: searchResultInfo})
  }

  updateFormRow(event, newInput) {
    var searchResponse = this.state.searchResponse;
    searchResponse[event.target.name] = newInput;
    this.setState({searchResponse: searchResponse});
  }

  searchEmail() {
    return axios({
      type: 'GET',
      url: '/searchCustomer/' + this.state.searchEmailInput
    }).then((response) => {
      if (response.data == "") {
        this.updateSearchResultInfo('Sorry we did not find that email in out records, please try a different email or fill out the customer information form');
        postRoute = '/submitCustomer';
      } else {
        this.updateSearchResponse(response.data);
        console.log(response.data);
        foundCustomer = true;
        this.updateSearchResultInfo('Please verfiy all of your information is still correct.');
        postRoute = '/updateCustomer';
      }
    });
  }

  openForm(props) {
    
    var KWH_rate = '';
    var meter = this.state.meter;
    var reading = this.state.meterReading;
    var formInfo = this.state.searchResponse;
    var formId;
    var thirtyAmp = '';
    var fiftyAmp = '';
    var daily = '';
    var weekly = '';
    var monthly = '';

    if (this.props.chosenCabin != 'none'){
      KWH_rate = '.15';
    } else {
      KWH_rate = '.11';
    };

    if (this.props.rvSpace) {
      formId = '302b34c0-b394-4859-8b81-e21e487c7e01';
    } else if (this.props.rvSpace && this.props.dogYes) {
      formId = '0';
    } else if (this.props.cabin && this.props.dogNo){
      formId = '0';
    };

    if (this.props.thirtyAmp) {
      thirtyAmp = 'X';
    } else {
      thirtyAmp = '';
    };

    if (this.props.fiftyAmp) {
      fiftyAmp = 'X';
    } else {
      fiftyAmp = '';
    };

    if (this.props.daily) {
      daily = 'X';
    } else {
      daily = '';
    };

    if (this.props.weekly) {
      weekly = 'X';
    } else {
      weekly = '';
    };

    if (this.props.monthly) {
      monthly = 'X';
    } else {
      monthly = '';
    };

    axios.post(postRoute, 
      {
        _id: formInfo._id,
        given_name: formInfo.given_name,
        family_name: formInfo.family_name,
        phone_number: formInfo.phone_number,
        phone_number_alt: formInfo.phone_number_alt,
        email: formInfo.email,
        address_line_1: formInfo.address_line_1,
        locality: formInfo.locality,
        administrative_district_level_1: formInfo.administrative_district_level_1,
        postal_code: formInfo.postal_code,
        country: formInfo.country,
        drivers_license_num: formInfo.drivers_license_num,
        drivers_license_state: formInfo.drivers_license_state,
        additional_occupant_1: formInfo.additional_occupant_1,
        additional_occupant_2: formInfo.additional_occupant_2,
        additional_occupant_3: formInfo.additional_occupant_3,
        additional_occupant_1_age: formInfo.additional_occupant_1_age,
        additional_occupant_2_age: formInfo.additional_occupant_2_age,
        additional_occupant_3_age: formInfo.additional_occupant_3_age,
        pets_number_of: formInfo.pets_number_of,
        pets_type: formInfo.pets_type,
        pets_breed: formInfo.pets_breed,
        unit_type: formInfo.unit_type,
        unit_license: formInfo.unit_license,
        unit_state: formInfo.unit_state,
        unit_year: formInfo.unit_year,
        unit_length: formInfo.unit_length,
        vehicle_1_type: formInfo.vehicle_1_type,
        vehicle_2_type: formInfo.vehicle_2_type,
        vehicle_1_license: formInfo.vehicle_1_license,
        vehicle_2_license: formInfo.vehicle_2_license,
        vehicle_1_state: formInfo.vehicle_1_state,
        vehicle_2_state: formInfo.vehicle_2_state,
        vehicle_1_year: formInfo.vehicle_1_year,
        vehicle_2_year: formInfo.vehicle_2_year,
        meter: this.state.meter,
        reading:[{reading: this.state.meterReading}],
        checkin: this.props.checkInDate,
        checkout: this.props.checkOutDate
      }).then(function(response){ 
        console.log('saved');
        axios.post('/addCustomerToMeter',
        {
          meter: meter,
          email: formInfo.email
        }).then(function(response){
          console.log('added to meter');
        });
    });

    var url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId="+ formId +"&Tennant_UserName="+ formInfo.given_name + "&Tennant_Email="+ formInfo.email + "&given_name="+ formInfo.given_name +"&family_name="+formInfo.family_name+"&address_line_1="+ formInfo.address_line_1+"&phone_number="+ formInfo.phone_number+"&phone_number_alt="+formInfo.phone_number_alt+"&locality="+formInfo.locality+"&administrative_district_level_1="+formInfo.administrative_district_level_1+"&postal_code="+formInfo.postal_code+"&country="+formInfo.country+"&drivers_license_num="+formInfo.drivers_license_num+"&drivers_license_state="+formInfo.drivers_license_state+"&additional_occupant_1="+formInfo.additional_occupant_1+"&additional_occupant_2="+formInfo.additional_occupant_2+"&additional_occupant_3="+formInfo.additional_occupant_3+"&additional_occupant_4="+formInfo.additional_occupant_4+"&additional_occupant_1_age="+formInfo.additional_occupant_1_age+"&additional_occupant_2_age="+formInfo.additional_occupant_2_age+"&additional_occupant_3_age="+formInfo.additional_occupant_3_age+"&additional_occupant_4_age="+formInfo.additional_occupant_4_age+"&pets_number_of="+formInfo.pets_number_of+"&pets_type="+formInfo.pets_type+"&pets_breed="+formInfo.pets_breed+"&unit_type="+formInfo.unit_type+"&unit_license="+formInfo.unit_license+"&unit_state="+formInfo.unit_state+"&unit_year="+formInfo.unit_year+"&unit_length="+formInfo.unit_length+"&vehicle_1_type="+formInfo.vehicle_1_type+"&vehicle_2_type="+formInfo.vehicle_2_type+"&vehicle_1_license="+formInfo.vehicle_1_license+"&vehicle_2_license="+formInfo.vehicle_2_license+"&vehicle_1_state="+formInfo.vehicle_1_state+"&vehicle_2_state="+formInfo.vehicle_2_state+"&vehicle_1_year="+formInfo.vehicle_1_year+"&vehicle_2_year="+formInfo.vehicle_2_year+"&daily="+daily+"&weekly="+weekly+"&monthly="+monthly+"&thirtyAmp="+thirtyAmp+"&fiftyAmp="+fiftyAmp+"&KWH_rate="+KWH_rate+"&reading="+reading+"&meter="+meter;

    var win = window.open(url, '_blank');
    win.focus();
  };

  render() {
    return (
      <Row>

        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title={this.props.cabin}
              subtitle={this.state.searchResultInfo}
            />
            <CardText>
              <TextField
                id='emailSearch'
                type='text'
                hintText='Customer Email Search'
                floatingLabelText='Customer Email Search'
                onChange={this.updateSearchEmailInput}
              />
              <RaisedButton
                style= {displayBlock}
                label="Submit Email"
                primary={true}
                onClick={this.searchEmail}
              /> 
              {this.inputFieldInfo.map(fieldInfo => this.formRow(fieldInfo))}
            </CardText>
            <CardActions>
            <RaisedButton
                  style={submitButton}
                  label="Submit"
                  primary={true}
                  onClick={this.openForm}
                /> 
            </CardActions>
            
          </Card>
        </Col>
      </Row>
    );
  }
}
