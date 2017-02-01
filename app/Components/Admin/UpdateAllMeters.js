import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'

export default class UpdateAllMeters extends React.Component {

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
