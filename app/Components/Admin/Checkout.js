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
      firstName: '',
      lastName: '',
      email: '',
      meter: '',
      previousMeterReading: '',
      finalMeterReading: '',
      finalKWHtotal: ''
    }

    this.updateSearchResultInfo = this.updateSearchResultInfo.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.updateCustomerInfo = this.updateCustomerInfo.bind(this);
    this.updateFinalMeterReading = this.updateFinalMeterReading.bind(this);
    this.searchEmail = this.searchEmail.bind(this);
    this.searchMeter = this.searchMeter.bind(this);
    this.updateFinalKWHtotal = this.updateFinalKWHtotal.bind(this);
  }

  updateSearchResultInfo(searchResultInfo) {
    this.setState({searchResultInfo: searchResultInfo})
  }

  updateSearchInput(event, newInput) {
    this.setState({searchInput: newInput});
  }

  updateCustomerInfo(response){
    this.setState({firstName: response.data.given_name});
    this.setState({lastName: response.data.family_name});
    this.setState({meter: response.data.meter});
    this.setState({previousMeterReading: response.data.reading[response.data.reading.length-1].reading});
    this.setState({email: response.data.email});
  }

  updateFinalKWHtotal(event, newInput) {
    this.setState({finalMeterReading: newInput});
    this.setState({finalKWHtotal: newInput});
  }

  updateFinalMeterReading(event, newInput) {
    axios.post('/submitFinalMeterReading',
    {
      meter: this.state.meter,
      reading: this.state.finalMeterReading
    }).then(function(response) {
      console.log('Saved Final');
    });
    axios.post('/removeCustomerFromMeter', 
    {
      meter: this.state.meter
    }).then(function(response) {
      console.log('Customer Removed from Meter');
    });
    axios.post('/removeMeterFromCustomer',
    {
      email: this.state.email
    }).then(function(response) {
      console.log('Meter Removed from Customer');
    })
  }

// currently not used
  searchEmail() {
    return axios({
      type: 'GET',
      url: '/checkOutByCustomerEmail/' + this.state.searchInput
    }).then((response) => {
      if (response.data == "") {
        this.updateSearchResultInfo('Sorry we did not find that email in out records, please try a different email or enter the meter ID');
      } else {
        console.log(response.data);
        this.updateCustomerInfo(response);
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
        console.log(response.data);
        this.updateCustomerInfo(response);
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
                hintText='Enter Meter Id'
                floatingLabelText='Enter Meter Id'
                onChange={this.updateSearchInput}
              />
            {/*not sure if I really need this option*/}
              {/*<RaisedButton
                style= {submitButton}
                label="Search Email"
                primary={true}
                onClick={this.searchEmail}
              />*/} 
              <RaisedButton
                style={submitButton}
                label="Search Meter"
                primary={true}
                onClick={this.searchMeter}
              /> 

              <h3> {this.state.firstName} </h3>
              <h3> {this.state.lastName} </h3>
              <h3> {this.state.meter} </h3>
              <h3> {this.state.previousMeterReading} </h3>
              <h3> {this.state.finalKWHtotal-this.state.previousMeterReading } </h3>

              <TextField
                id='finalMeterReading'
                type='text'
                hintText='Enter final meter reading'
                floatingLabelText='Enter final meter reading'
                onChange={this.updateFinalKWHtotal}
              />
              <Link to='payment'>
              <RaisedButton
                style={submitButton}
                label="Submit Final Meter Reading"
                primary={true}
                onClick={this.updateFinalMeterReading}
              /> 
              </Link>
              
            </CardText>
            <CardActions>
              
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
