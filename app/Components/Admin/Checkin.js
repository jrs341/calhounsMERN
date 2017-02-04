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
    {displayName: 'State', dataName: 'administrative_district_1'}, 
    {displayName: 'Postal Code', dataName: 'postal_code'}, 
    {displayName: 'Country', dataName: 'country'},
    ];
    
    this.state = {
      process: 'Checkin',
      searchEmailInput: '',
      searchResponse: {},
      searchResultInfo: 'Please enter your email address to search our records for your information or fill out the new customer form.'
    }

    this.updateSearchEmailInput = this.updateSearchEmailInput.bind(this);
    this.updateSearchResponse = this.updateSearchResponse.bind(this);
    this.searchEmail = this.searchEmail.bind(this);
    this.updateSearchResultInfo = this.updateSearchResultInfo.bind(this);
  }

  formRow(fieldInfo) {
    return (
      <TextField
        key={fieldInfo.displayName}
        value={this.state.searchResponse[fieldInfo.dataName]}
        hintText={fieldInfo.displayName}
        floatingLabelText={fieldInfo.displayName}>
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

  searchEmail() {
    console.log('hit search email');
    return axios({
      type: 'GET',
      url: '/searchCustomer/' + this.state.searchEmailInput
    }).then((response) => {
      console.log(response);
      if (response.data == "") {
        this.updateSearchResultInfo('Sorry we did not find that email in out records, please try a different email or fill out the customer information form');
      } else {
        this.updateSearchResponse(response.data);
        this.updateSearchResultInfo('Found it! Please verfiy all of your information is still correct.');
      }
    });
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
                /> 
            </CardActions>
            
          </Card>
        </Col>
      </Row>
    );
  }
}
