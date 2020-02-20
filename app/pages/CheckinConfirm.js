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
          		title='You have completed the checkin process please review and digitally sign the Site Service Agreement for RV spaces or Lease agreement for Cabins.'
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