import React from 'react';
import './_footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className={'footer row'}>
        <div className={'footer--text col-12'}>
          <p className={''}>Copyright TM 2019</p>
          <p>Photo by Expect Best from Pexels</p>
        </div>
      </div>
    );
  }
}

export default Footer;
