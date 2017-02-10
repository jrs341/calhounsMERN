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
        instructions: 'Please enter all meter readings.',
        newMeterId: '',
        newMeterReading: ''
      }

      this.updateMetersResponse = this.updateMetersResponse.bind(this);
      this.getMeters = this.getMeters.bind(this);
      this.updateFormRow = this.updateFormRow.bind(this);
      this.sumbitNewReadings = this.sumbitNewReadings.bind(this);
      this.sumbitNewMeter = this.sumbitNewMeter.bind(this);
      this.sumbitNewMeterId = this.sumbitNewMeterId.bind(this);
      this.sumbitNewMeterReading = this.sumbitNewMeterReading.bind(this);
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
    // console.log(this.state.getMetersResponse[1].meter);
    console.log(getRequestResponse);
  }

  updateFormRow(event, newInput) {
    var newReading = this.state.getMetersResponse;
    newReading[event.target.name].reading = Number(event.target.value);
    this.setState({getMetersResponse: newReading});
    console.log(newReading[event.target.name]);
  }

  sumbitNewMeterId(event) {
    console.log(event.target.value);
    this.setState({newMeterId: event.target.value});
  }

  sumbitNewMeterReading(event) {
    console.log(event.target.value);
    this.setState({newMeterReading: Number(event.target.value)});
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

sumbitNewReadings() {
  var array = this.state.getMetersResponse;
  var arrayLength = this.state.getMetersResponse.length;
  for (var i=0; i<arrayLength; i++){
        axios.post('/submitAllMeterReadings', 
      {
        _id: array[i]._id,

        reading: array[i].reading

      }).then(function(response){ 
      console.log('saved');
    });
  }
}

sumbitNewMeter() {
        axios.post('/newMeter', 
      {
        meter: this.state.newMeterId,

      }).then(function(response){ 
      console.log('saved');
    });
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
            {/*<TextField
              hintText= 'New Meter'
              floatingLabelText= 'New Meter'
              onBlur={this.sumbitNewMeterId}>
            </TextField>
            <TextField
              hintText= 'New Meter Reading'
              floatingLabelText= 'New Meter Reading'
              onBlur={this.sumbitNewMeterReading}>
            </TextField>*/}
            </CardText>
            <CardActions>
             <RaisedButton
              style={submitButton}
              label="Submit"
              primary={true}
              onClick={this.sumbitNewReadings}
              />  
             {/*<RaisedButton
              style={submitButton}
              label="New Meter"
              primary={true}
              onClick={this.sumbitNewMeter}
              />*/}  
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
