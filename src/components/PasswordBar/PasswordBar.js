import React from 'react';

class PasswordBar extends React.Component {
  render() {
    return (
      <div className={'password--strength col-12'}>
        <div
          className={
            'password--weak col-4 ' + (this.props.passworsWeak ? 'show' : '')
          }
        />
        <div
          className={
            'password--medium col-4 ' +
            (this.props.passwordMedium ? 'show' : '')
          }
        />
        <div
          className={
            'password--strong col-4 ' +
            (this.props.passwordStrong ? 'show' : '')
          }
        />
      </div>
    );
  }
}
export default PasswordBar;
