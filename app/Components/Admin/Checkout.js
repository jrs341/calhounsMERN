import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const submitButton = {
  width: 200
}

export default class Checkout extends React.Component {

  constructor(){
    super()

    this.state = {
      searchResultInfo: '',
      finalBill: false,
      searchInput: '',
      finalMeterReading: ''
    }

    this.updateSearchResultInfo = this.updateSearchResultInfo.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.updateFinalMeterReading = this.updateFinalMeterReading.bind(this);
    this.searchEmail = this.searchEmail.bind(this);
    this.searchMeter = this.searchMeter.bind(this);
  }

  updateSearchResultInfo(searchResultInfo) {
    this.setState({searchResultInfo: searchResultInfo})
  }

  updateSearchInput(event, newInput) {
    this.setState({searchInput: newInput});
  }

  updateFinalMeterReading(event, newInput) {
    this.setState({finalMeterReading: newInput});
  }

  searchEmail() {
    return axios({
      type: 'GET',
      url: '/checkOutByCustomerEmail/' + this.state.searchInput
    }).then((response) => {
      if (response.data == "") {
        this.updateSearchResultInfo('Sorry we did not find that email in out records, please try a different email or enter the meter ID');
      } else {
        this.updateSearchResultInfo('Enter the final meter reading to continue');
      }
    });
  }

  searchMeter() {
    return axios({
      type: 'GET',
      url: '/checkOutByMeter/' + this.state.searchInput
    }).then((response) => {
      if (response.data == "") {
        this.updateSearchResultInfo('Sorry we did not find that meter ID in out records, please try a searching with your email address');
      } else {
        this.updateSearchResultInfo('Enter the final meter reading to continue');
      }
    });
  }

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Checkout"
              subtitle={this.state.searchResultInfo}
            />
            <CardText>
              <TextField
                id='checkOutSearch'
                type='text'
                hintText='Enter Customer Email or RV Space'
                floatingLabelText='Enter Customer Email or RV Space'
                onChange={this.updateSearchInput}
              />
              <RaisedButton
                style= {submitButton}
                label="Submit Email"
                primary={true}
                onClick={this.searchEmail}
              /> 
              <RaisedButton
                style={submitButton}
                label="Submit Meter"
                primary={true}
                onClick={this.searchMeter}
              /> 
              <TextField
                id='finalMeterReading'
                type='text'
                hintText='Enter final meter reading'
                floatingLabelText='Enter final meter reading'
                onChange={this.updateFinalMeterReading}
              />
              
            </CardText>
            <CardActions>
              
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
