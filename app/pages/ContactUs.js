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

const iframeContainer = {
  width: '90%',
  height: '23em',
  marginTop: 10,
  marginLeft: 'auto',
  marginRight: 'auto'
};

const iframeStyle = {
  width: '100%',
  height: '100%',
  borderStyle: 'groove',
  borderRadius: 2
};

const cardText = {
  position: 'relative',
  top: -30
};

const iconPhone = {
  position: 'relative',
  top: 8,
  left: 0,
  color: '#87FC70'
};

const iconEmail = {
  position: 'relative',
  top: 8,
  left: 0,
  color: '#1AD6FD'
};

const iconClock = {
  position: 'relative',
  top: 15,
  left: 0,
  color: 'red'
};

const iconGPS = {
  position: 'relative',
  marginRight: 3,
  top: 8,
  left: 0,
  color: 'red'
};

const iconLocation = {
  position: 'relative',
  marginRight: 3,
  top: 8,
  left: 0,
  color: 'red'
};

const pStyle = {
  marginLeft: '2em',
  textIndent: '-2em'
};

const aStyle = {
  textDecoration: 'none'
};

export default class ContactUs extends React.Component {

  render() {
    return (
        <Row>
          <Col md={5} offset={{md:1}}>
            <Card style={{marginTop: 10, height: '23em'}}>
              <CardTitle
                  title="Contact Calhoun's"
              />
              <CardText style={cardText}>
                <p> <Phone style={iconPhone} />
                    {/*<abbr title="Phone"></abbr>*/} <a style={aStyle} href="361-550-7536">361 550 7536</a></p>
                <p> <Email style={iconEmail} />
                    {/*<abbr title="Email">E</abbr>:*/} <a style={aStyle} href="mailto:calhoun@calhounsrvretreats.com">calhoun@calhounsrvretreats.com</a>
                </p>
                <p style={pStyle}> <Clock style={iconClock} />
                    {/*<abbr title="Hours">H</abbr>:*/} Monday - Friday: 9:00 AM to 6:00 PM<br></br>
                    Saturday - Sunday 9:00 AM to 4:00 PM</p>
                <p style={pStyle}> <GpsFixed style={iconGPS} />
                    <strong>GPS Coordinates:</strong><br></br>
                    Lat: 28.477294<br></br>
                    Long: -96.861032<br></br>
                </p>
                <p style={pStyle}> <Location style={iconLocation}/>
                    <strong>Address:</strong><br></br>
                    125 Haeber Ln<br></br>
                    Tivoli, TX 77990<br></br>
                </p>
              </CardText>
            </Card>
          </Col>
          <Col md={5}>
            <div style={iframeContainer}>
            <iframe style={iframeStyle} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB4s1b2brpC2l4TpMDbtxcx58o7IZqRsSw&q=Calhoun+Riverside+RV+Retreat,Tivoli+TX"></iframe>
            </div>
          </Col> 
        </Row> 
    );
  }
}
