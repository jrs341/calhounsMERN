import React from 'react'
import { connect } from "react-redux"

import { Link } from 'react-router'

import { searchEmail, newCustomerForm } from '../../actions/checkinActions'
import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

@connect((store) =>{
  return {
    // process: store. ,
    // instruction: store. 

  }
})
export default class Checkin extends React.Component {

  constructor() {
    super()
    this.searchEmail = searchEmail
    this.newCustomerForm = newCustomerForm
  }


  render() {
    return (
      <Row>

        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle id='searchResult'
              title={this.props.process}
              subtitle="{this.props.instruction} "
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
                  onClick={this.newCustomerForm}
                /> 
            </CardActions>
            
          </Card>
        </Col>
      </Row>
    );
  }
}
