import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

const buttonStyle = {
  width: 200,
  display: 'block',
  marginBottom: 10,
  marginLeft: 'auto',
  marginRight: 'auto'
};

export default class UpdateMeters extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardActions>
              <Link to={'updateSelectMeters'}>
                <RaisedButton
                  style={buttonStyle}
                  label="Update Select Meter"
                  primary={true}
                />
              </Link>
              <Link to={'updateAllMeters'}>
                <RaisedButton
                  style={buttonStyle}
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
