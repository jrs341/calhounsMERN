import React from 'react'          
import { Row, Col } from 'react-grid-system'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
// need to add styling here for small mobile screens, media quieries adjusting text and columb size
const tableRow = {

};
export default class ContactUs extends React.Component {

    render() {
        return ( 
        <div>
        <Row>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn></TableHeaderColumn>
                    <TableHeaderColumn>Nightly</TableHeaderColumn>
                    <TableHeaderColumn>Weekly </TableHeaderColumn>
                    <TableHeaderColumn>Monthly</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} stripedRows={true}>
                <TableRow>
                    <TableRowColumn>30 AMP</TableRowColumn>
                    <TableRowColumn>$35.00</TableRowColumn>
                    <TableRowColumn>$155.00</TableRowColumn>
                    <TableRowColumn>$335.00*</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>50 AMP</TableRowColumn>
                    <TableRowColumn>$37.00</TableRowColumn>
                    <TableRowColumn>$170.00</TableRowColumn>
                    <TableRowColumn>$335.00*</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Per Extra Person</TableRowColumn>
                    <TableRowColumn>$7.00</TableRowColumn>
                    <TableRowColumn>$30.00</TableRowColumn>
                    <TableRowColumn>$60.00</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Cabin **</TableRowColumn>
                    <TableRowColumn>$95.00</TableRowColumn>
                    <TableRowColumn>$395.00</TableRowColumn>
                    <TableRowColumn>$795.00*</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
        </Row>
        <Row>
            <ol>
                <li> For monthly stays there is a $100 security deposit for RV spaces and a $200 security deposit for cabins.  The security deposit is NOT used to pay final rent or electric bills.</li><br></br>
                <li> For monthly guests rent and electric are due each month based on your arrival date, ex. if you arrive on October 16th your next payment will be due on November 16th. The billing cycle for each month is on the 23rd of each month, when you receive an invoice the due date is your arrival date even though you received an invoice on the 23rd.</li><br></br> 
                <li> Electricity is .11 per KWH for RV spaces and .15 per KWH for cabins.</li><br></br>
            </ol>
            <ul>
                <li> * Electric is billed seperatly for monthly stays</li><br></br>
                <li> ** Maximum occupancy per cabin is 2 adults</li><br></br>
            </ul>
        </Row>
    </div>
        );
    }
}