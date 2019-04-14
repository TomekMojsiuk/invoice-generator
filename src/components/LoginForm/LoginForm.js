import React from 'react';
import PasswordBar from '../PasswordBar/PasswordBar'

import './_loginForm.scss'

export class LoginForm extends React.Component {
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

	beforeLogin = (e) => {
		e.preventDefault();
		this.props.handleLogin({
			username: this.state.username,
			password: this.state.password,
		});
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

				<form onSubmit={this.beforeLogin}>

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
						<button className={'button toggle'} type="button"
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

export default LoginForm;
