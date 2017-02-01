import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
export default class Admin extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Admin"
              subtitle="Choose Process"
            />
            <CardText>
              
            </CardText>
            <CardActions>
              <Link to={'checkin'}>
                <RaisedButton 
                  label='Checkin'
                  primary={true}
                  />
              </Link>
              <Link to={'checkout'}>
                <RaisedButton 
                  label='Checkout'
                  primary={true}  
                />
              </Link>
              <Link to={'updateMeters'}>
                <RaisedButton
                  label='Update Meters'
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
