import React from 'react';
import './_loginForm.scss';
import users from '../data/users.json';

class PasswordBar extends React.Component {

	render () {
		return (
			<div className={"password--strength col-12"}>
				<div className={"password--weak col-4 " +
				(this.props.passworsWeak ? 'show' : '')}></div>
				<div className={"password--medium col-4 " +
				(this.props.passwordMedium ? 'show' : '')}></div>
				<div className={"password--strong col-4 " +
				(this.props.passwordStrong ? 'show' : '')}></div>
			</div>
		)
	}
}

//Login ======================================================================

class LoginForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',

			hidden: true,
			toggleShowText: 'show',

			errors: [],

			passwordStrength: null
		};

		this.toggleShow = this.toggleShow.bind(this);
		this.handleFormValidation = this.handleFormValidation.bind(this);
	}

	//Validation

	showValidationError (elm, msg) {
		this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
	}

	clearValidationError (elm) {
		this.setState((prevState) => {
			let newError = [];
			for (let err of prevState.errors) {
				if (elm !== err.elm) {
					newError.push(err);
				}
			}
			return {errors: newError};
		});
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value,
		});

		this.clearValidationError("username")
	};

	handleEmailChange = event => {
		this.setState({
			email: event.target.value,
		});

		this.clearValidationError('email')
	};

	handlePasswordChange = event => {
		this.setState({
			password: event.target.value,
		});

		this.clearValidationError('password')

		//Password strength settings

		this.setState( {passwordStrength: 'null'})

		if (event.target.value.length > 0) {
			this.setState( {passwordStrength: 'weak'})
		} else {
			this.setState( {passwordStrength: 'null'})
		}

		if (event.target.value.length > 8) {
			this.setState( {passwordStrength: 'medium'})
		}

		if (event.target.value.length > 12) {
			this.setState( {passwordStrength: 'strong'})
		}
	};

	toggleShow () {
		if (this.state.hidden === true) {
			this.setState({
				hidden: !this.state.hidden,
				toggleShowText: 'hide',
			});
		} else {
			this.setState({
				hidden: !this.state.hidden,
				toggleShowText: 'show',
			});
		}
	}

	handleFormValidation (e) {

		if (this.state.username === '') {
			this.showValidationError('username', 'Username cannot be empty!');
		}
		if (this.state.email === '') {
			this.showValidationError('email', 'Email cannot be empty!');
		}
		if (this.state.password === '') {
			this.showValidationError('password', 'password cannot be empty!');
		}

	}

	render () {

		let userNameError = null, userEmailError = null, userPasswordError = null;

		for (let err of this.state.errors) {

			if (err.elm === 'username') {
				userNameError = err.msg;
			}
			if (err.elm === 'email') {
				userEmailError = err.msg;
			}
			if (err.elm === 'password') {
				userPasswordError = err.msg;
			}

		}

		//Passwors Validation =========================================================
		let passwordWeak = false, passwordMedium = false, passwordStrong = false
		let password = this.state.passwordStrength;

		if (password === '') {
			passwordWeak = false
			passwordMedium = false
			passwordStrong = false
		} else if (password === 'weak') {
			passwordWeak = true
		} else if (password === 'medium') {
			passwordWeak = true;
			passwordMedium = true;
		} else if (password === 'strong') {
			passwordWeak = true
			passwordMedium = true
			passwordStrong = true
		}

		return (
			<div className={'form--body register'}>
				<h1>Login</h1>
				<p className={'alert--msg'}>{this.props.handleError}</p>
				<form onSubmit={this.props.handleLogin}>

					<div className={'form--input--username col-12'}>
						<input autoFocus={true} className={'form--input col-12'}
						       type={'text'}
						       value={this.state.username}
						       onChange={this.handleUsernameChange}
						       placeholder="Nazwa użytkownika"/>
						<small className={'validation-error'}>{userNameError
							? userNameError
							: ''}</small>
					</div>

					<div className={'form--input--email col-12'}>
						<input className={'form--input col-12'}
						       type={'email'}
						       value={this.state.email}
						       onChange={this.handleEmailChange}
						       placeholder="Twój adres e-mail"/>
						<small className={'validation-error'}>{userEmailError
							? userEmailError
							: ''}</small>
					</div>

					<div className={'form--input--password col-12'}>
						<input className={'form--input password'}
						       type={this.state.hidden ? 'password' : 'text'}
						       value={this.state.password}
						       onChange={this.handlePasswordChange}
						       placeholder="hasło"/>
						<button className={'button toggle'}
						        onClick={this.toggleShow}>{this.state.toggleShowText}</button>
						<small className={'validation-error'}>{userPasswordError
							? userPasswordError
							: ''}</small>
						<PasswordBar passworsWeak={passwordWeak}
						             passwordMedium={passwordMedium}
						             passwordStrong={passwordStrong} />

					</div>

					<div className={'col-12'}>
						<button type="submit" className={'button login'}
						        onClick={this.handleFormValidation}>Login
						</button>
					</div>

				</form>
			</div>
		);
	}
}

//Registration ======================================================================

class RegistrationForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',

			hidden: true,
			toggleShowText: 'show',

			errors: [],

			passwordStrength: null
		};

		this.toggleShow = this.toggleShow.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	showValidationError (elm, msg) {
		this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
	}

	clearValidationError (elm) {
		this.setState((prevState) => {
			let newError = [];
			for (let err of prevState.errors) {
				if (elm !== err.elm) {
					newError.push(err);
				}
			}
			return {errors: newError};
		});
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value,
		});

		this.clearValidationError("username")
	};

	handleEmailChange = event => {
		this.setState({
			email: event.target.value,
		});

		this.clearValidationError('email')
	};

	handlePasswordChange = event => {
		this.setState({
			password: event.target.value,
		});

		this.clearValidationError('password')

		//Password strength settings

		this.setState( {passwordStrength: 'null'})

		if (event.target.value.length > 0) {
			this.setState( {passwordStrength: 'weak'})
		} else {
			this.setState( {passwordStrength: 'null'})
		}

		if (event.target.value.length > 8) {
			this.setState( {passwordStrength: 'medium'})
		}

		if (event.target.value.length > 12) {
			this.setState( {passwordStrength: 'strong'})
		}
	};

	toggleShow () {
		if (this.state.hidden === true) {
			this.setState({
				hidden: !this.state.hidden,
				toggleShowText: 'hide',
			});
		} else {
			this.setState({
				hidden: !this.state.hidden,
				toggleShowText: 'show',
			});
		}
	}

	handleRegister (e) {

		if (this.state.username === '') {
			this.showValidationError('username', 'Username cannot be empty!');
		}
		if (this.state.email === '') {
			this.showValidationError('email', 'Email cannot be empty!');
		}
		if (this.state.password === '') {
			this.showValidationError('password', 'password cannot be empty!');
		}

	}

	render () {

		let userNameError = null, userEmailError = null, userPasswordError = null;

		for (let err of this.state.errors) {

			if (err.elm === 'username') {
				userNameError = err.msg;
			}
			if (err.elm === 'email') {
				userEmailError = err.msg;
			}
			if (err.elm === 'password') {
				userPasswordError = err.msg;
			}

		}

		let passwordWeak = false, passwordMedium = false, passwordStrong = false
		let password = this.state.passwordStrength;

		if (password === '') {
			passwordWeak = false
			passwordMedium = false
			passwordStrong = false
		} else if (password === 'weak') {
			passwordWeak = true
		} else if (password === 'medium') {
			passwordWeak = true;
			passwordMedium = true;
		} else if (password === 'strong') {
			passwordWeak = true
			passwordMedium = true
			passwordStrong = true
		}

		return (
			<div className={'form--body register'}>
				<h1>Register</h1>
				<form>

					<div className={'form--input--username col-12'}>
						<input autoFocus={true} className={'form--input col-12'}
						       type={'text'}
						       value={this.state.username}
						       onChange={this.handleUsernameChange}
						       placeholder="Nazwa użytkownika"/>
						<small className={'validation-error'}>{userNameError
							? userNameError
							: ''}</small>
					</div>

					<div className={'form--input--email col-12'}>
						<input className={'form--input col-12'}
						       type={'email'}
						       value={this.state.email}
						       onChange={this.handleEmailChange}
						       placeholder="Twój adres e-mail"/>
						<small className={'validation-error'}>{userEmailError
							? userEmailError
							: ''}</small>
					</div>

					<div className={'form--input--password col-12'}>
						<input className={'form--input password'}
						       type={this.state.hidden ? 'password' : 'text'}
						       value={this.state.password}
						       onChange={this.handlePasswordChange}
						       placeholder="hasło"/>
						<button className={'button toggle'}
						        onClick={this.toggleShow}>{this.state.toggleShowText}</button>
						<small className={'validation-error'}>{userPasswordError
							? userPasswordError
							: ''}</small>
						<PasswordBar passworsWeak={passwordWeak}
						             passwordMedium={passwordMedium}
						             passwordStrong={passwordStrong} />

					</div>

					<div className={'col-12'}>
						<button type="submit" className={'button login'}
						        onClick={this.handleRegister}>Register
						</button>
					</div>
				</form>
			</div>
		);
	}
}


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
	//Przekazujemy do zmiennych dane logowania z formularza
		const username = loginData.username;
		const password = loginData.password;

		console.log(users);

		const userFound = users.find((user) => {

			return user.username === username && user.password === password;

	});

		if (userFound) {
			this.setState({
				isLoggedIn: true
			})
		}else {
			this.setState({
				loginFailAlert: "Wpisz poprawne dane logowania"
			})
		}

	}

	render () {
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
	}
}