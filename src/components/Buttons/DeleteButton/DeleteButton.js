import React from 'react';

import './DeleteButton.scss'

class DeleteButton extends React.Component {

	render () {
		return (<div className={"button--delete"} onClick={this.props.onClick} id={this.props.deleteKey}></div>)
	}
}

export default DeleteButton;