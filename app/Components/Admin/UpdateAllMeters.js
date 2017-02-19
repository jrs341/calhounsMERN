import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'

const textFieldNone = {
  display: 'none'
}

const textField = {
  backgroundColor: 'red'
}

const submitButton = {
  width: 200
}

var metersToRemoveLastReading = [];

export default class UpdateAllMeters extends React.Component {

    constructor() {
      super()
      
      this.state = {
        getMetersResponse: [],
        instructions: 'Please enter all meter readings. The reading displayed is the last documented reading',
        textField: textFieldNone,
        checked: false,
        submitFunction: this.sumbitNewReadings,
        onBlur: this.updateFormRow,
        newMeter: false,
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
      this.removeLastReading = this.removeLastReading.bind(this);
      this.metersToRemoveLastReading = this.metersToRemoveLastReading.bind(this);
      this.removeLastReadingPostRoute = this.removeLastReadingPostRoute.bind(this);
      this.addNewMeter = this.addNewMeter.bind(this);
    }
    
  formRow(fieldInfo, index) {
    return (
      <div>
      <TextField
        // style={textField}
        name={index.toString()}
        key={index}
        hintText={`Meter: ${fieldInfo.meter}`}
        // floatingLabelText={`Meter: ${fieldInfo.meter} Last Entry: ${fieldInfo.reading[fieldInfo.reading.length-1].reading}`}
        onBlur={this.updateFormRow}>
      </TextField>
      <TextField
        style={this.state.textField}
        name={fieldInfo.meter}
        key={fieldInfo.meter}
        hintText={`Meter: ${fieldInfo.meter}`}
        // floatingLabelText={`Meter: ${fieldInfo.meter} Last Entry: ${fieldInfo.reading[fieldInfo.reading.length-1].reading}`}
        onBlur={this.metersToRemoveLastReading}>
      </TextField>
      </div>
      );
  }

  updateMetersResponse(getRequestResponse) {
    this.setState({getMetersResponse: getRequestResponse});
    console.log(this.state.getMetersResponse);
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

  removeLastReading() {
    if (!this.state.checked) {
      this.setState({instructions: 'Only select the filed of the Meter or Meters you want to remove the last entry from'});
      this.setState({submitFunction: this.removeLastReadingPostRoute});
      this.setState({textField: textField});
      this.setState({checked: true});
    } else {
      this.setState({instructions: 'Please enter all meter readings. The reading displayed is the last documented reading'});
      this.setState({submitFunction: this.sumbitNewReadings});
      this.setState({checked: false});
      this.setState({textField: textFieldNone});
    }
  }

  metersToRemoveLastReading(event) {
    console.log(event.target.name);
    metersToRemoveLastReading.push(event.target.name);
    console.log(metersToRemoveLastReading);
  }

  removeLastReadingPostRoute() {
    for (var i=0; i<metersToRemoveLastReading.length; i++) {
      axios.post('/removeLastEntryFromCustomerReading',
      {
        meter: metersToRemoveLastReading[i]
      }).then(function(response){
        console.log('reading removed from customer');
      });
      axios.post('/removeLastEntryFromMeterReading',
      {
        meter: metersToRemoveLastReading[i]
      }).then(function(response){
        console.log('reading removed from meter');
      });
    }
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

componentWillMount() {
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
      console.log('saved to meter collection');
    });
      axios.post('/submitAllCustomerMeterReadings', 
      {
        meter: array[i].meter,

        reading: array[i].reading

      }).then(function(response){ 
      console.log('saved to customer collection');
    });
  }
}

addNewMeter() {
  if (!this.state.newMeter) {
      this.setState({instructions: 'Enter the meter ID/Location'});
      this.setState({submitFunction: this.sumbitNewMeter});
      this.setState({textField: textField});
      this.setState({newMeter: true});
    } else {
      this.setState({instructions: 'Please enter all meter readings. The reading displayed is the last documented reading'});
      this.setState({submitFunction: this.sumbitNewReadings});
      this.setState({newMeter: false});
      this.setState({textField: textFieldNone});
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
            <Checkbox
              label='Check to Remove Last Entry from a Meter'
              onCheck={this.removeLastReading}>
            </Checkbox>
            <Checkbox
              label='Check to add a new meter to the database'
              onCheck={this.addNewMeter}>
            </Checkbox>
      
            <CardText>
              {this.state.getMetersResponse.map((fieldInfo, index) => this.formRow(fieldInfo, index))}
            <TextField
              style={this.state.textField}
              hintText= 'New Meter'
              floatingLabelText= 'New Meter'
              onBlur={this.sumbitNewMeterId}>
            </TextField>
            <TextField
              style={this.state.textField}
              hintText= 'New Meter Reading'
              floatingLabelText= 'New Meter Reading'
              onBlur={this.sumbitNewMeterReading}>
            </TextField>
            </CardText>
            <CardActions>
             <RaisedButton
              style={submitButton}
              label="Submit"
              primary={true}
              onClick={this.state.submitFunction}
              />  
              <Link to='monthlyBilling'>
               <RaisedButton
                style={submitButton}
                label="Monthly Billing"
                primary={true}
                />
              </Link>  
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
