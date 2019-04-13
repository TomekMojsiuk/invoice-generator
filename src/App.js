import React, { Component } from 'react';
import './app.scss';
import { Footer } from './footer/Footer';
import BackgroundImg from './BackgroundImg'
import users from './data/users';
import { Controller } from './main-controller/Controller';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			isLoginOpen: true,
			isRegistrationOpen: false,

			isLoggedIn: false,
			loginFailAlert: ''
		};

	}

	showLoginBox = () => {
		console.log('login clicked');
		this.setState({
			isLoginOpen: true,
			isRegistrationOpen: false,
		});
	};

	showRegistrationBox = () => {
		console.log('registration clicked');
		this.setState({
			isRegistrationOpen: true,
			isLoginOpen: false,
		});
	};

	handleLogin = (loginData) => {

		console.log(loginData);

		//Przekazujemy do zmiennych dane logowania z formularza
		const username = loginData.username;
		const password = loginData.password;

		console.log(users);

		const userFound = users.find((user) => {
			console.log(user);
			console.log(username, password);

			return user.username === username && user.password === password;

		});

		if (userFound) {
			this.setState({
				isLoggedIn: true,
				loginFailAlert: ''
			})
		}else {
			this.setState({
				loginFailAlert: "Wpisz poprawne dane logowania"
			})
		}

	}

	handleLogOut = () => {
		const timeout = setTimeout(() => {

			this.setState({
				isLoggedIn: false
			})
		},2000)
	}

	render () {
		return (<div className={'container'}>
				<BackgroundImg />
				<Controller handleLogin={this.handleLogin}
				            handleLogOut={this.handleLogOut}
				            showLoginBox={this.showLoginBox}
				            showRegistrationBox={this.showRegistrationBox}
				            isLoggedIn={this.state.isLoggedIn}
				            isLoginOpen={this.state.isLoginOpen}
				            isRegistrationOpen={this.state.isRegistrationOpen}
				            loginFailAlert={this.state.loginFailAlert}
				            />
				<Footer />
			</div>
		);
	}
}

export default App;
