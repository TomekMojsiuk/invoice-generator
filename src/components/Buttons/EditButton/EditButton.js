import React from 'react';

import './EditButton.scss'

class EditButton extends React.Component {

	render () {
		return (<div className={"button--edit"}
		             key={this.props.key}
		             onClick={this.props.onClick}>

		</div>)
	}
}

export default EditButton;