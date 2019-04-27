import React, { Fragment } from 'react';

import MyLink from '../MyLink/MyLink';

class NavLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn, handleLogOut } = this.props;

    return (
      <div className={'col-5 nav--top--links-container'}>
        <div className={'nav--top--links'}>
          {isLoggedIn ? (
            <Fragment>
              <MyLink exact to="/">
                Faktury
              </MyLink>
              <MyLink exact to="/clients">
                Kontrahenci
              </MyLink>
              <MyLink
                exact
                to="/"
                className={'btn--logout'}
                onClick={handleLogOut}
              >
                Wyloguj
              </MyLink>
            </Fragment>
          ) : (
            <Fragment>
              <MyLink exact to="/">
                Zaloguj
              </MyLink>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default NavLinks;
