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

export default class CheckinConfirm extends React.Component {

	render() {
	return(
	  <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
          	<CardTitle
          		title='You have completed the checkout process if the customer is leaving please check for an open invoice and add the final electric bill to the open invoice and charge the customer for that amount.  Then notify Jason that a space or cabin has become available.  If the customer is moving to a new space, create a ticket in Square with the final useage, do not include any usage that is already on an open invoice'
          	/>
            <CardActions>
              <Link to={'/'}>
                <RaisedButton 
                  style={buttonStyle}
                  label='Return to Main Page'
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