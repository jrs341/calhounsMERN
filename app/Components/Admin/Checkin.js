import React from 'react'
import { connect } from "react-redux"

import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

@connect((store) =>{
  return {
     
  }
})
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
    }
    this.updateSearchEmailInput = this.updateSearchEmailInput.bind(this);
    this.updateSearchResponse = this.updateSearchResponse.bind(this);
    this.searchEmail = this.searchEmail.bind(this);
    this.updateSubtitle = this.updateSubtitle.bind(this);
  }

  formRow(fieldInfo) {
    return (
      <span key={fieldInfo.displayName}>
        <label>{fieldInfo.displayName}</label>
        <input placeholder={fieldInfo.displayName} value={this.state.searchResponse[fieldInfo.dataName]}></input>
      </span>
    )
  }

  updateSearchEmailInput(event, newInput) {
    this.setState({searchEmailInput: newInput});
  }

  updateSearchResponse(searchResponse) {
    this.setState({searchResponse: searchResponse});
  }

  updateSubtitle(instructions) {
    this.setState({subtitle: instructions})
  }

  searchEmail() {
    console.log('hit search email');
    return axios({
      type: 'GET',
      url: '/searchCustomer/' + this.state.searchEmailInput
    }).then((response) => {
      console.log(response);
      if (response.data == "") {
        this.updateSearchResponse('did not find it');
      } else {
        this.updateSearchResponse(response.data);
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
              subtitle=''
            />
            <CardText>
              <TextField
                  id='emailSearch'
                  type='text'
                  onChange={this.updateSearchEmailInput}
                />
                {this.inputFieldInfo.map(fieldInfo => this.formRow(fieldInfo))}
            </CardText>
            <CardActions>
            <RaisedButton
                  label="Submit Email"
                  primary={true}
                  onClick={this.searchEmail}
                /> 
            <RaisedButton
                  label="New Customer"
                  primary={true}
                /> 
            </CardActions>
            
          </Card>
        </Col>
      </Row>
    );
  }
}
