import React from 'react';
import users from '../data/users.json';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';
import BackgroundImg from '../App';
import { MainPanel } from '../main-panel/MainPanel';
import { Footer } from '../footer/Footer';

export class Controllers extends React.Component {

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

	render () {
		!this.state.isLoggedIn ?
		return (<div className={'container'}>
				<BackgroundImg />
				<TopNav />
				<MainPanel />
				<Footer />
			</div>
		);
	}

	/*render () {

		return (<div>

				<div className="box--controller row">
					<div className={'controls col-5'}>
						<div className={'controller ' +
						(this.state.isLoginOpen ? 'controller--selected' : '')}
						     onClick={this.showLoginBox}>Login
						</div>
						<div className={'controller ' +
						(this.state.isRegistrationOpen ? 'controller--selected' : '')}
						     onClick={this.showRegistrationBox}>Register
						</div>
					</div>
				</div>
				<div className={'box--form row'}>
					<div className={'form col-5'}>
						{this.state.isLoginOpen && <LoginForm handleLogin={this.handleLogin} handleError={this.state.loginFailAlert} />}
						{this.state.isRegistrationOpen && <RegistrationForm />}
					</div>
				</div>
			</div>
		);
	}*/
}