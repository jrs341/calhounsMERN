import React from 'react'

export default class TextInput extends React.Component{
	
	render() {
		return (
		<div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate">
          <label for="first_name">First Name</label>
        </div>
		);
	}
}