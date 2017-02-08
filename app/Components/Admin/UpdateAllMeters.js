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

// onChange={this.updateFormRow}>

    // need a variable in the dataname and displayname
export default class UpdateAllMeters extends React.Component {

    constructor() {
      super()
      
      this.state = {
        getMetersResponse: [],
        instructions: 'Please enter all meter readings.'
      }

      this.updateMetersResponse = this.updateMetersResponse.bind(this);
      this.getMeters = this.getMeters.bind(this);
    }
    
  formRow(fieldInfo) {
    return (
      <TextField
        name={fieldInfo.meter}
        key={fieldInfo.meter}
        hintText={fieldInfo.meter}
        floatingLabelText={fieldInfo.meter}>
      </TextField>
      );
  }

  updateMetersResponse(getRequestResponse) {
    this.setState({getMetersResponse: getRequestResponse});
    console.log(this.state.getMetersResponse[1].meter);
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

componentDidMount() {
  this.getMeters();
}

// sumbitNewReadings() {
//     return axios({
//       type: 'POST',
//       url: '/submitAllMeterReadings',
//       data: {

//           meter: what is this object?

//           reading: what is this object?

//             }
//       }).then((response) => {
//         console.log(response); 
//       }
//     });
// }
  
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
              {this.state.getMetersResponse.map(fieldInfo => this.formRow(fieldInfo))}
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
