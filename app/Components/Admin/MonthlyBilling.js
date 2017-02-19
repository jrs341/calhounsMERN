 
import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import axios from 'axios'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'

const submitButton = {
  width: 200
}

export default class UpdateAllMeters extends React.Component {

    constructor() {
      super()
      
      this.state = {
        customerBillingInfo: [],
        instructions: 'Please verify all of the information is correct'
      } 

    this.getCustomersBillingInfo = this.getCustomersBillingInfo.bind(this);
    this.updateCustomerBillingInfo = this.updateCustomerBillingInfo.bind(this);
    this.tableRow = this.tableRow.bind(this);
    }

  tableRow(fieldInfo) {
    return (
      <TableRow>
        <TableRowColumn>{fieldInfo.given_name}</TableRowColumn>
        <TableRowColumn>{fieldInfo.family_name}</TableRowColumn>
        <TableRowColumn>{fieldInfo.email}</TableRowColumn>
        <TableRowColumn>{fieldInfo.rate}</TableRowColumn>
        <TableRowColumn>{fieldInfo.checkin}</TableRowColumn>
        {/*<TableRowColumn>{fieldInfo.reading[fieldInfo.reading.length-1].reading-fieldInfo.reading[fieldInfo.reading.length-2].reading}</TableRowColumn>*/}
      </TableRow>
      );
  }

  updateCustomerBillingInfo(getRequestResponse) {
    this.setState({customerBillingInfo: getRequestResponse});
  }

  // need to get customer name, email, meter, kwhUsage, checkin date,
  getCustomersBillingInfo() {
    return axios({
      type: 'GET',
      url: '/customerBillingInfo/'
    }).then((response) => {
        this.updateCustomerBillingInfo(response.data);
    });
  }

componentWillMount() {
  this.getCustomersBillingInfo();
}

  render() {
    return (
      <Row>
        <Col md={12}>
          <Card>
            <CardTitle
              title="Monthly Billing Results"
              subtitle={this.state.instructions}
            />
            <CardText>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>First Name</TableHeaderColumn>
                  <TableHeaderColumn>Last Name</TableHeaderColumn>
                  <TableHeaderColumn>Email</TableHeaderColumn>
                  <TableHeaderColumn>Rate</TableHeaderColumn>
                  <TableHeaderColumn>Checkin</TableHeaderColumn>
                  <TableHeaderColumn>KWH Usage</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} stripedRows={true}>
              {this.state.customerBillingInfo.map((fieldInfo) => this.tableRow(fieldInfo))}
              </TableBody>
            </Table>
            </CardText>
            <CardActions>
            <Link to='admin'>
             <RaisedButton
              style={submitButton}
              label="Return to Admin"
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
