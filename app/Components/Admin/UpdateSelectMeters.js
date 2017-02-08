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
              title="Update Select Meters"
              subtitle="Search by Meter Id"
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
