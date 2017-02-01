import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


export default class UpdateMeters extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Update Meters"
              subtitle="Choose Process"
            />
            <CardText>
              Update Meters
            </CardText>
            <CardActions>
              <Link to={'updateSelectMeters'}>
                <RaisedButton
                  label="Update Select Meter"
                  primary={true}
                />
              </Link>
              <Link to={'updateAllMeters'}>
                <RaisedButton
                  label="Update All Meters"
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
