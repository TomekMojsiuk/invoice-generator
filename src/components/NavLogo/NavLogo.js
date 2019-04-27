import React from 'react';

import './NavLogo.scss';

class NavLogo extends React.Component {
  render() {
    return (
      <div className={'col-5 nav--top-logo'}>
        <h1>Invoice-me</h1>
      </div>
    );
  }
}

export default NavLogo;
