import React from 'react';

import './AddUserButton.scss'

class AddUserButton extends React.Component {

	render () {
		return (<div className={"button--add--user"} onClick={this.props.onClick}></div>)
	}
}

export default AddUserButton;