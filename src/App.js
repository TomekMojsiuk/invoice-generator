import React, { Component, Fragment } from 'react';
import './app.scss';
import { Footer } from './footer/Footer';
import BackgroundImg from './BackgroundImg';
import users from './data/data';
import { Login } from './pages/Login';
import {
	BrowserRouter,
	HashRouter,
	Route,
	Link,
	Switch,
	NavLink
} from 'react-router-dom'
import TopNav from './top-nav/TopNav';
import { InvoiceList } from './pages/InvoiceList';
import { InvoiceAdd } from './pages/InvoiceAdd';
import { MainPanel } from './main-panel/MainPanel';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			users: [],

			isLoginOpen: true,
			isRegistrationOpen: false,

			isLoggedIn: false,
			loginFailAlert: '',
		};

	}

	componentDidMount () {

		fetch('http://localhost:3001/users').
			then(response => response.json()).
			then(users => this.setState({
				users: users,
			})).then(() => {
			console.log(this.state.users);
		});

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

		const userFound = this.state.users.find((user) => {
			console.log(user);
			console.log(username, password);

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
		const timeout = setTimeout(() => {

			this.setState({
				isLoggedIn: false,
			});
		}, 1000);
	};


	render () {
		console.log(this.state.isLoggedIn)
		return (<div className={'container'}>
				<BrowserRouter>
					<BackgroundImg/>

					<TopNav handleLogOut={this.handleLogOut}/>
					{!this.state.isLoggedIn ? (
						<Fragment>
							<Route exact path="/login" render={() => (
								<Login handleLogin={this.handleLogin}
								handleLogOut={this.handleLogOut}
								showLoginBox={this.showLoginBox}
								showRegistrationBox={this.showRegistrationBox}
								isLoggedIn={this.state.isLoggedIn}
								isLoginOpen={this.state.isLoginOpen}
								isRegistrationOpen={this.state.isRegistrationOpen}
								loginFailAlert={this.state.loginFailAlert}
								/>
								)}/>
						</Fragment>
					):(
						<Fragment>

							<Route exact path="/" render={() => (
								<InvoiceList isLoggedIn={this.props.isLoggedIn} loginFailAlert={this.props.loginFailAlert} /> )}/>

							<Route exact path="/invoice-add" render={() => (
								<InvoiceAdd invoices={this.state.invoices} />)}/>

						</Fragment>
						)}
						<MainPanel/>
					<Footer/>
				</BrowserRouter>
			</div>

		);
	}
}

export default App;
