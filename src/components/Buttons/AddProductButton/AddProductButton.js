import React from 'react';

import './AddProductButton.scss';

class AddProductButton extends React.Component {
  render() {
    return (
      <div className={'button--add--product'} onClick={this.props.onClick} />
    );
  }
}

export default AddProductButton;
