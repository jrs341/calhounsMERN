import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 300,
  },
};

export default class DogDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Pit Bull Terriers" />
          <MenuItem value={2} primaryText="Staffordshire Terriers" />
          <MenuItem value={3} primaryText="Rottweilers" />
          <MenuItem value={4} primaryText="German Shepherds" />
          <MenuItem value={5} primaryText="Presa Canarios" />
          <MenuItem value={6} primaryText="Chows Chows" />
          <MenuItem value={7} primaryText="Doberman Pinschers" />
          <MenuItem value={8} primaryText="Akitas" />
          <MenuItem value={9} primaryText="Wolf-hybrids" />
          <MenuItem value={10} primaryText="Mastiffs" />
          <MenuItem value={11} primaryText="Cane Corsos" />
          <MenuItem value={12} primaryText="Alaskan Malamutes" />
          <MenuItem value={13} primaryText="Siberian Huskies" />
          <MenuItem value={14} primaryText="None of the above" />

        </DropDownMenu>
    );
  }
}