import React from 'react';

import './RegularButton.scss';

class RegularButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={'button--regular'} onClick={this.props.onClick} >
        {this.props.text}
      </div>
    );
  }
}

export default RegularButton;
