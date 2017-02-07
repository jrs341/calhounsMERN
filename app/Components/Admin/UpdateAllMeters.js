import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export default class UpdateAllMeters extends React.Component {
// +this.state.getMetersResponse[fieldInfo.dataName]
    constructor() {
      super()
      this.inputFieldInfo = [
      {displayName: 'Meter', dataName: 'meter'}
      ];

      this.state = {
        getMetersResponse: {},
        instructions: 'Please enter all meter readings.'
      }

      this.updateMetersResponse = this.updateMetersResponse.bind(this);
      this.getMeters = this.getMeters.bind(this);
    }
    
  formRow(fieldInfo) {
  return (
    <TextField
      key={fieldInfo.displayName}
      hintText={fieldInfo.displayName}
      floatingLabelText={fieldInfo.displayName}
      onChange={this.updateFormRow}>
    </TextField>
    );
  }

  updateMetersResponse(getRequestResponse) {
    this.setState({getMetersResponse: getRequestResponse});
  }

  getMeters() {
    return axios({
      type: 'GET',
      url: '/meter/'
    }).then((response) => {
      if (response.data == "") {
        console.log('error!');
      } else {
        console.log(response.data);
        this.updateMetersResponse(response.data);
      }
    });
  }

componentWillMount() {
  this.getMeters();
}
  // onRender()??? do get request???
  // this function will then set the state of getMeterResponse object to response from request
  
  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Update All Meters"
              subtitle={this.state.instructions}
            />
            <CardText>
              {this.inputFieldInfo.map(fieldInfo => this.formRow(fieldInfo))}
            </CardText>
            <CardActions>
              
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
