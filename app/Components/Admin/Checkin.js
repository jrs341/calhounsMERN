import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { searchEmail } from '../../actions/checkinActions'
import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Checkin extends React.Component {

  constructor() {
    super()
    this.searchEmail = searchEmail
  }


  render() {
    return (
      <Row>

        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle id='searchResult'
              title="Checkin"
              subtitle=" "
            />
            <CardText id='newCustomerForm'>
              <TextField
                  id='emailSearch'
                  type='text'
                />
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
                  // onClick={}
                /> 
            </CardActions>
            
          </Card>
        </Col>
      </Row>
    );
  }
}
