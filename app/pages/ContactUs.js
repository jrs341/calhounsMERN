import React from 'react'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText } from 'material-ui/Card'


export default class ContactUs extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Contact Us"
              subtitle="WooHoo"
            />
            <CardText>
              We just navigated to our next page!!!
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}
