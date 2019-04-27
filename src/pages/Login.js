import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

class Login extends React.Component {
  render() {
    const {
      handleLogin,
      isLoginOpen,
      isRegistrationOpen,
      loginFailAlert,
      showLoginBox,
      showRegistrationBox,
    } = this.props;

    return (
      <div>
        <div className="box--controller row">
          <div className={'controls col-5'}>
            <div
              className={
                'controller ' + (isLoginOpen ? 'controller--selected' : '')
              }
              onClick={showLoginBox}
            >
              Zaloguj się
            </div>
            <div
              className={
                'controller ' +
                (isRegistrationOpen ? 'controller--selected' : '')
              }
              onClick={showRegistrationBox}
            >
              Zarejestruj się
            </div>
          </div>
        </div>
        <div className={'box--form row'}>
          <div className={'form col-5'}>
            {isLoginOpen && (
              <LoginForm
                handleLogin={handleLogin}
                handleError={loginFailAlert}
              />
            )}
            {isRegistrationOpen && <RegistrationForm />}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
