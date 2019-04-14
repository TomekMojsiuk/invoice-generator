import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./app.scss";
import users from "./data/data";

import Footer from "./components/Footer/Footer";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import TopNav from "./components/TopNav/TopNav";
import MainPanel from "./components/MainPanel/MainPanel";

import InvoiceList from "./pages/InvoiceList";
import InvoiceAdd from "./pages/InvoiceAdd";
import Login from "./pages/Login";
import NotFound from './pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],

      isLoginOpen: true,
      isRegistrationOpen: false,

      isLoggedIn: false,
      loginFailAlert: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          users: users
        })
      )
      .then(() => {
        console.log(this.state.users);
      });
  }

  showLoginBox = () => {
    console.log("login clicked");
    this.setState({
      isLoginOpen: true,
      isRegistrationOpen: false
    });
  };

  showRegistrationBox = () => {
    console.log("registration clicked");
    this.setState({
      isRegistrationOpen: true,
      isLoginOpen: false
    });
  };

  handleLogin = loginData => {
    console.log(loginData);

    //Przekazujemy do zmiennych dane logowania z formularza
    const username = loginData.username;
    const password = loginData.password;

    console.log(users);

    const userFound = this.state.users.find(user => {
      console.log(user);
      console.log(username, password);

      return user.username === username && user.password === password;
    });

    if (userFound) {
      this.setState({
        isLoggedIn: true,
        loginFailAlert: ""
      });
    } else {
      this.setState({
        loginFailAlert: "Wpisz poprawne dane logowania"
      });
    }
  };

  handleLogOut = () => {
    setTimeout(() => {
      this.setState({
        isLoggedIn: false
      });
    }, 1000);
  };

  render() {
    console.log(this.state.isLoggedIn);
    return (
      <div className={"container"}>
        <BrowserRouter>
          <BackgroundImg />
          <TopNav handleLogOut={this.handleLogOut} />
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
                path="/invoice-add"
                render={() => <InvoiceAdd invoices={this.state.invoices} />}
              />
              <Route component={NotFound}/>
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
              <Route component={NotFound}/>
            </Switch>
          )}
          <MainPanel />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
