import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export default class UpdateAllMeters extends React.Component {

    constructor() {
    super()
    this.inputFieldInfo = [
    {displayName: 'Meter ID', dataName: 'meter'}, 
    
    ];
    
    // this.state = {
    //   getMeterResponse: {},
    //   instructions: 'Please enter all meter readings.'
    // };
  }
  
  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Update All Meters"
              subtitle=" "
            />
            <CardText>
              
            </CardText>
            <CardActions>
              
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
