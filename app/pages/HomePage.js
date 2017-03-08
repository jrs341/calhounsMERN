import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const rowStyle = {
  height: '10%',
  marginRight: -8,
  marginLeft: -8
};
const indent = {
  textIndent: 30
};
const picStyle = {
  width: '100%'
};
const content = {
  marginRight: 0,
  marginLeft: 0
}
const style = {
  textAlign: 'center'
};

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
      <Row style={rowStyle}>
        <img style={picStyle} src="./css/images/coverImage.jpg"/>
      </Row>
      <Row style={content}>
            <h1 style={style} >
            Your Front Row Seat to a Texas Gem, 
            <br>
            </br>
            The Guadalupe River
            </h1>
            <p style={indent}>
            Calhoun’s Riverside RV Retreat offers visitors the best of the Guadulupe River. Just outside Tivoli, Texas, and a short drive from Victoria, Port O'Connor and Point Comfort, Calhoun’s is centrally located and filled 
            with wildlife. Once you see it you’ll know: Calhoun’s is unlike any other Texas RV park. Here, visitors can take advantage of some of the best fishing, bow fishing, boating, and canoing and kayaking in Texas, or simply enjoy the river from their RV! Just 17 miles from Port Lavaca, 30 miles from Rockport and Victoria, Calhoun’s offers a peaceful RV camping experience nestled beneath giant oak trees.
            </p>
            <p style={indent}>
            Forget trying to get a spot on the bay, Calhoun’s is just 5 short miles by boat from the San Antonio Bay. The river is plenty deep enough to accommodate larger boats, and with Calhoun’s private boat ramp, getting there is easy. Located in the center of the Crescent Coast, visitors can boat their way to the Gulf of Mexico, while enjoying an abundancy of wildlife.
            </p>
            <p style={indent}>
            Calhoun’s offers more than a little something for everyone. Whether you enjoy deer, water fowel or feral hog hunting, this is a sportsmen’s paradise. If you’re a Winter Texan looking for an alternative to the crowds, Calhoun’s is a unique Texas RV Park centrally located to the region’s historic and resort towns. Tired of RV parks without a tree in sight? Wanting a little room to get comfortable? Seeking a little adventure on the river? Calhoun’s is a different kind of place. Paddle down the river one day, take a drive to Corpus Christi the next and enjoy all the variety in this quiet corner of the Crescent Coast.
            </p>
            <p style={indent}>
            Owned and operated by a U.S. Army veteran, Calhoun’s is all about providing sportsmen, Winter Texans and families with a great place to experience the best of Texas!
            </p>
            <p style={style}>
            Need lodging? We have cabins!
            </p>
      </Row>
      </div>
    );
  }
}
