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
        customerBillingInfo: [],
        instructions: 'Please verify all of the information is correct'
      }

      
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

  // updateMetersResponse(getRequestResponse) {
  //   this.setState({getMetersResponse: getRequestResponse});
  //   // console.log(this.state.getMetersResponse[1].meter);
  //   console.log(getRequestResponse);
  // }

  updateFormRow(event, newInput) {
    var newReading = this.state.getMetersResponse;
    newReading[event.target.name].reading = Number(event.target.value);
    this.setState({getMetersResponse: newReading});
    console.log(newReading[event.target.name]);
  }

  // sumbitNewMeterId(event) {
  //   console.log(event.target.value);
  //   this.setState({newMeterId: event.target.value});
  // }

  // sumbitNewMeterReading(event) {
  //   console.log(event.target.value);
  //   this.setState({newMeterReading: Number(event.target.value)});
  // }

  // need to get customer name, email, meter, kwhUsage, checkin date,
  getCustomersBillingInfo() {
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
  this.getCustomersBillingInfo();
}

// sumbitNewReadings() {
//   var array = this.state.getMetersResponse;
//   var arrayLength = this.state.getMetersResponse.length;
//   for (var i=0; i<arrayLength; i++){
//         axios.post('/submitAllMeterReadings', 
//       {
//         _id: array[i]._id,

//         reading: array[i].reading

//       }).then(function(response){ 
//       console.log('saved');
//     });
//   }
// }

// sumbitNewMeter() {
//         axios.post('/newMeter', 
//       {
//         meter: this.state.newMeterId,

//       }).then(function(response){ 
//       console.log('saved');
//     });
//   }

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Monthly Billing Results"
              subtitle={this.state.instructions}
            />
            <CardText>
              {this.state.customerBillingInfo.map((fieldInfo, index) => this.formRow(fieldInfo, index))}
            </CardText>
            <CardActions>
            <Link to='admin'>
             <RaisedButton
              style={submitButton}
              label="Return to Admin"
              primary={true}
              />
            </Link> 
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
