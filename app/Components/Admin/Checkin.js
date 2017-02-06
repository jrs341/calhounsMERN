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

export default class Checkin extends React.Component {

  constructor() {
    super()
    this.inputFieldInfo = [
    {displayName: 'First Name', dataName: 'given_name'}, 
    {displayName: 'Last Name', dataName: 'family_name'}, 
    {displayName: 'Phone Number', dataName: 'phone_number'}, 
    {displayName: 'Email Address', dataName: 'email'}, 
    {displayName: 'Address Line 1', dataName: 'address_line_1'}, 
    {displayName: 'City', dataName: 'locality'}, 
    {displayName: 'State', dataName: 'administrative_district_level_1'}, 
    {displayName: 'Postal Code', dataName: 'postal_code'}, 
    {displayName: 'Country', dataName: 'country'},
    {displayName: 'Drivers License Number', dataName: 'drivers_license_num'},
    {displayName: 'Drivers License State', dataName: 'drivers_license_state'},
    {displayName: 'Addition Occupant 1', dataName: 'additional_occupant_1'},
    {displayName: 'Additiona Occupant 1 Age', dataName: 'additional_occupant_1_age'},
    {displayName: 'Addition Occupant 2', dataName: 'additional_occupant_2'},
    {displayName: 'Additiona Occupant 2 Age', dataName: 'additional_occupant_2_age'},
    {displayName: 'Addition Occupant 3', dataName: 'additional_occupant_3'},
    {displayName: 'Additiona Occupant 3 Age', dataName: 'additional_occupant_3_age'},
    {displayName: 'Addition Occupant 4', dataName: 'additional_occupant_4'},
    {displayName: 'Additiona Occupant 4 Age', dataName: 'additional_occupant_4_age'},
    {displayName: 'Number of Pets', dataName: 'pets_number_of'},
    {displayName: 'Type of Pets', dataName: 'pets_type'},
    {displayName: 'Breed of Dog', dataName: 'pets_breed'},
    {displayName: 'RV Type', dataName: 'unit_type'},
    {displayName: 'RV License Plate Number', dataName: 'unit_license'},
    {displayName: 'RV License Plate State', dataName: 'unit_state'},
    {displayName: 'RV Year', dataName: 'unit_year'},
    {displayName: 'RV Length', dataName: 'unit_length'},
    {displayName: 'Vehicle 1 Type', dataName: 'vehicle_1_type'},
    {displayName: 'Vehicle 1 License Plate Number', dataName: 'vehicle_1_license'},
    {displayName: 'Vehicle 1 License Plate State', dataName: 'vehicle_1_state'},
    {displayName: 'Vehicle 1 Year', dataName: 'vehicle_1_year'},
    {displayName: 'Vehicle 2 Type', dataName: 'vehicle_2_type'},
    {displayName: 'Vehicle 2 License Plate Number', dataName: 'vehicle_2_license'},
    {displayName: 'Vehicle 2 License Plate State', dataName: 'vehicle_2_state'},
    {displayName: 'Vehicle 2 Year', dataName: 'vehicle_2_year'},
    ];
    
    this.state = {
      process: 'Checkin',
      searchEmailInput: '',
      searchResponse: {},
      searchResultInfo: 'Please enter your email address to search our records for your information or fill out the new customer form.',
      newCustomerInfo: {}
    }

    this.updateSearchEmailInput = this.updateSearchEmailInput.bind(this);
    this.updateSearchResponse = this.updateSearchResponse.bind(this);
    this.searchEmail = this.searchEmail.bind(this);
    this.updateSearchResultInfo = this.updateSearchResultInfo.bind(this);
    this.updateFormRow = this.updateFormRow.bind(this);
    this.submitNewCustomer = this.submitNewCustomer.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  formRow(fieldInfo) {
    return (
      <TextField
        key={fieldInfo.displayName}
        value={this.state.searchResponse[fieldInfo.dataName]}
        hintText={fieldInfo.displayName}
        floatingLabelText={fieldInfo.displayName}
        onChange={this.updateFormRow}>
      </TextField>
      );
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
    searchResponse.given_name = newInput;
    this.setState({searchResponse: searchResponse});
  }

  searchEmail() {
    return axios({
      type: 'GET',
      url: '/searchCustomer/' + this.state.searchEmailInput
    }).then((response) => {
      if (response.data == "") {
        this.updateSearchResultInfo('Sorry we did not find that email in out records, please try a different email or fill out the customer information form');
      } else {
        this.updateSearchResponse(response.data);
        this.updateSearchResultInfo('Please verfiy all of your information is still correct.');
      }
    });
  }

  submitNewCustomer() {
    console.log(this.state.searchResponse);
  }

  openForm() {
    var formInfo = this.state.searchResponse;
    var url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=302b34c0-b394-4859-8b81-e21e487c7e01&Tennant_UserName="+ formInfo.given_name + "&Tennant_Email="+ formInfo.email + "&given_name="+ formInfo.given_name +"&family_name="+formInfo.family_name+"&address_line_1="+ formInfo.address_line_1+"&phone_number="+ formInfo.phone_number+"&phone_number_alt="+formInfo.phone_number_alt+"&locality="+formInfo.locality+"&administrative_district_level_1="+formInfo.administrative_district_level_1+"&postal_code="+formInfo.postal_code+"&country="+formInfo.country+"&drivers_license_num="+formInfo.drivers_license_num+"&drivers_license_state="+formInfo.drivers_license_state+"&additional_occupant_1="+formInfo.additional_occupant_1+"&additional_occupant_2="+formInfo.additional_occupant_2+"&additional_occupant_3="+formInfo.additional_occupant_3+"&additional_occupant_4="+formInfo.additional_occupant_4+"&additional_occupant_1_age="+formInfo.additional_occupant_1_age+"&additional_occupant_2_age="+formInfo.additional_occupant_2_age+"&additional_occupant_3_age="+formInfo.additional_occupant_3_age+"&additional_occupant_4_age="+formInfo.additional_occupant_4_age+"&pets_number_of="+formInfo.pets_number_of+"&pets_type="+formInfo.pets_type+"&pets_breed="+formInfo.pets_breed+"&unit_type="+formInfo.unit_type+"&unit_license="+formInfo.unit_license+"&unit_state="+formInfo.unit_state+"&unit_year="+formInfo.unit_year+"&unit_length="+formInfo.unit_length+"&vehicle_1_type="+formInfo.vehicle_1_type+"&vehicle_2_type="+formInfo.vehicle_2_type+"&vehicle_1_license="+formInfo.vehicle_1_license+"&vehicle_2_license="+formInfo.vehicle_2_license+"&vehicle_1_state="+formInfo.vehicle_1_state+"&vehicle_2_state="+formInfo.vehicle_2_state+"&vehicle_1_year="+formInfo.vehicle_1_year+"&vehicle_2_year="+formInfo.vehicle_2_year;
    var win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    return (
      <Row>

        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title={this.state.process}
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
