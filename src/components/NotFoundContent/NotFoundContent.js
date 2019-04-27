import React from 'react';
import './_NotFoundContent.scss';

class NotFoundContent extends React.Component {
  render() {
    return (
      <div className={'link--not--found'}>
        <h1>Lookin' for somethin'?</h1>
        <p>
          The page you're looking for most probably does not exist. Try logging
          in.
        </p>
        <div className={'link--not--found_img'} />
      </div>
    );
  }
}

export default NotFoundContent;
