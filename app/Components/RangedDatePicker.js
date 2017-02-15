import React from 'react';
import { connect } from "react-redux";

import {
  changeCheckInDateState,
  changeCheckOutDateState
} from '../actions/checkinQuestionsActions.js';

import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

@connect((store) => {
  return {
    checkInDate: store.checkInDateState.checkInDate,
    checkOutDate: store.checkOutDateState.checkOutDate,
    cabinStatic: store.cabinStaticState.cabinStatic
  };
})

/**
 * This example allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 */

 /**
 * Need to fix the cabinStatic state, constructor geting inital state and not changing
 */

export default class RangedDatePicker extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    const maxArrivalDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    if (this.props.cabinStatic) {
    maxArrivalDate.setDate(maxDate.getDate() + 5);
    maxDate.setHours(0, 0, 0, 0);
    }
    else {
      maxArrivalDate.setDate(maxDate.getDate() + 7);
    maxDate.setHours(0, 0, 0, 0);
    }

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      maxArrivalDate: maxArrivalDate,
      autoOk: false,
      disableYearSelection: false,
    }

    this.checkInDateState = this.checkInDateState.bind(this);
    this.checkOutDateState = this.checkOutDateState.bind(this);
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  checkInDateState(empty, date) {
    this.props.dispatch(changeCheckInDateState(empty, date))
  };

  checkOutDateState(empty, date) {
    this.props.dispatch(changeCheckOutDateState(empty, date))
  };

  render() {
    return (
      <div>
        <DatePicker
          disabled={this.props.checkInDate}
          floatingLabelText="Checkin"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxArrivalDate}
          disableYearSelection={this.state.disableYearSelection}
          // onTouchTap={this.checkInDate}
          onChange={this.checkInDateState}
        />
        <div style={optionsStyle}>
          <DatePicker
            disabled={this.props.checkOutDate}
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Checkout"
            // defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
            // onTouchTap={this.checkOutDate}
            onChange={this.checkOutDateState}

          />
          {/*<DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />*/}
          {/*<Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />*/}
        </div>
      </div>
    );
  }
}