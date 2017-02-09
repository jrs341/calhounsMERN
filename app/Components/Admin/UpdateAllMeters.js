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

export default class UpdateAllMeters extends React.Component {

    constructor() {
      super()
      
      this.state = {
        getMetersResponse: [],
        instructions: 'Please enter all meter readings.'
      }

      this.updateMetersResponse = this.updateMetersResponse.bind(this);
      this.getMeters = this.getMeters.bind(this);
      this.updateFormRow = this.updateFormRow.bind(this);
      this.sumbitNewReadings = this.sumbitNewReadings.bind(this);
    }
    
  formRow(fieldInfo, index) {
    return (
      <TextField
        name={index.toString()}
        key={index}
        hintText={`Meter: ${fieldInfo.meter}`}
        floatingLabelText={`Meter: ${fieldInfo.meter}`}
        onBlur={this.updateFormRow}>
      </TextField>
      );
  }

  updateMetersResponse(getRequestResponse) {
    this.setState({getMetersResponse: getRequestResponse});
    console.log(this.state.getMetersResponse[1].meter);
  }

  updateFormRow(event, newInput) {
    var newReading = this.state.getMetersResponse;
    newReading[event.target.name].reading.push(event.target.value);
    this.setState({getMetersResponse: newReading});
    console.log(newReading[event.target.name]);
    console.log(this.state.getMetersResponse[1].reading);
  }

  getMeters() {
    return axios({
      type: 'GET',
      url: '/meter/'
    }).then((response) => {
      if (response.data == "") {
        console.log('error!');
      } else {
        this.updateMetersResponse(response.data);
        }
    });
  }

componentDidMount() {
  this.getMeters();
}
// [1].reading.length
sumbitNewReadings() {
  console.log(this.state.getMetersResponse.length);
  for (var i=1; i<this.state.getMetersResponse.length-2; i++){
    return axios.post('/submitAllMeterReadings', 
      {
        meter: this.state.getMetersResponse[i].meter,

        reading: this.state.getMetersResponse[i].reading[this.state.getMetersResponse[i].reading.length-1]

      }).then(function(response){ 
      console.log('saved');
    });
  }
}

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
              {this.state.getMetersResponse.map((fieldInfo, index) => this.formRow(fieldInfo, index))}
            </CardText>
            <CardActions>
             <RaisedButton
              style={submitButton}
              label="Submit"
              primary={true}
              onClick={this.sumbitNewReadings}
              />  
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
