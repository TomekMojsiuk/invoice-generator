import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Footer from './components/Footer/Footer';
import BackgroundImg from './components/BackgroundImg/BackgroundImg';
import TopNav from './components/TopNav/TopNav';
import InvoiceList from './pages/InvoiceList';
import InvoiceAddNew from './pages/InvoiceAddNew';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Clients from './pages/Clients';
import Products from './pages/Products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],

      loading: true,
      isLoginOpen: true,
      isRegistrationOpen: false,

      isLoggedIn: false,
      loginFailAlert: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          users: users,
        }),
      )
      .then(() => {});
  }

  showLoginBox = () => {
    this.setState({
      isLoginOpen: true,
      isRegistrationOpen: false,
    });
  };

  showRegistrationBox = () => {
    this.setState({
      isRegistrationOpen: true,
      isLoginOpen: false,
    });
  };

  handleLogin = (loginData) => {
    const username = loginData.username;
    const password = loginData.password;

    const userFound = this.state.users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (userFound) {
      this.setState({
        isLoggedIn: true,
        loginFailAlert: '',
      });
    } else {
      this.setState({
        loginFailAlert: 'Wpisz poprawne dane logowania',
      });
    }
  };

  handleLogOut = () => {
    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
      });
    }, 1000);
  };

  render() {
    return (
      <div className={'container'}>
        <BrowserRouter>
          <BackgroundImg />

          <TopNav
            handleLogOut={this.handleLogOut}
            isLoggedIn={this.state.isLoggedIn}
          />
          {this.state.isLoggedIn ? (
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <InvoiceList
                    isLoggedIn={this.props.isLoggedIn}
                    loginFailAlert={this.props.loginFailAlert}
                  />
                )}
              />

              <Route
                exact
                path="/add-invoice"
                render={() => <InvoiceAddNew />}
              />

              <Route exact path="/clients" render={() => <Clients />} />

              <Route exact path="/products" render={() => <Products />} />

              <Route component={NotFound} />
            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Login
                    handleLogin={this.handleLogin}
                    handleLogOut={this.handleLogOut}
                    showLoginBox={this.showLoginBox}
                    showRegistrationBox={this.showRegistrationBox}
                    isLoggedIn={this.state.isLoggedIn}
                    isLoginOpen={this.state.isLoginOpen}
                    isRegistrationOpen={this.state.isRegistrationOpen}
                    loginFailAlert={this.state.loginFailAlert}
                  />
                )}
              />

              <Route component={NotFound} />
            </Switch>
          )}
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
