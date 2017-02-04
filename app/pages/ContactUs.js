import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardTitle, CardText, CardActions} from 'material-ui/Card'
import GpsFixed from 'material-ui/svg-icons/device/gps-fixed'
import Location from 'material-ui/svg-icons/communication/location-on'
import Phone from 'material-ui/svg-icons/communication/phone'
import Email from 'material-ui/svg-icons/communication/email'
import Clock from 'material-ui/svg-icons/device/access-time'

const iframeStyle = {
  width: '100%',
  height: 400,
  frameBorder: '0',
  scrolling: 'no',
  marginHeight: 0,
  marginWidth: 0
};

const pStyle = {
  display: 'inlineBlock',
  varticalAlign: 'middle'
}

export default class ContactUs extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col>
            <iframe style={iframeStyle} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB4s1b2brpC2l4TpMDbtxcx58o7IZqRsSw&q=Calhoun+Riverside+RV+Retreat,Tivoli+TX"></iframe>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardTitle
                title="Send Calhoun a Message"
                subtitle=""
              />
              <CardActions>
                <TextField
                  hintText="Name"
                  floatingLabelText="Name"
                /><br />
                <TextField
                  hintText="Phone Number"
                  floatingLabelText="Phone Number"
                /><br />
                <TextField
                  hintText="Email"
                  floatingLabelText="Email"
                /><br />
                <TextField
                  hintText="Message Field"
                  floatingLabelText="Message"
                  multiLine={true}
                  rows={5}
                /><br />
                <Link href="mailto:calhoun@calhounsrvretreats.com">
                  <RaisedButton 
                    label='Submit'
                    primary={true}
                    />
                </Link>
              </CardActions>
            </Card>
          </Col>
            
          <Col md={6}>
            <Card>
              <CardTitle
                  title="Contact Calhoun"
              />
              <CardText>
                <p> <Phone />
                    <abbr title="Phone">P</abbr>: (361) 550-7536</p>
                <p> <Email />
                    <abbr title="Email">E</abbr>: <a href="mailto:calhoun@calhounsrvretreats.com">calhoun@calhounsrvretreats.com</a>
                </p>
                <p> <Clock />
                    <abbr title="Hours">H</abbr>:<br></br> Monday - Friday: 9:00 AM to 6:00 PM<br></br>
                    Saturday - Sunday 9:00 AM to 4:00 PM</p>
              </CardText>
            </Card>
            <Card>
              <CardTitle
                  title="Find Calhoun's"
              />
              <CardText>
                <p style={pStyle}> <GpsFixed /><span>GPS Coordinates:</span><br></br>
                    Lat: 28.477294<br></br>
                    Long: -96.861032<br></br>
                </p>
                <p> <Location />
                    Address<br></br>
                    125 Haeber Ln<br></br>
                    Tivoli, TX 77990<br></br>
                </p>
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
