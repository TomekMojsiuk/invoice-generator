import React from 'react';

import './AddNewButton.scss';

class AddNewButton extends React.Component {
  render() {
    return (
      <div
        className={'button--add--new'}
        onClick={this.props.onClick}
        key={this.props.productKey}
      />
    );
  }
}

export default AddNewButton;
