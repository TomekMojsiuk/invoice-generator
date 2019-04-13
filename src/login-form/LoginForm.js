import React from 'react'
import './loginForm.scss'

export class LoginForm extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			loggedIn: false,
			login: '',
			password: '',

			hidden: true,
			toggleShowText: "show password"
		}

		this.toggleShow = this.toggleShow.bind(this);
	}

	handleLoginChange = event => {
		this.setState({
			login: event.target.value
		})
	}
	handlePasswordChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	toggleShow () {
		if (this.state.hidden === true) {
			this.setState({
				hidden: !this.state.hidden,
				toggleShowText: "hide password"
			})
		} else {
			this.setState({
				hidden: !this.state.hidden,
				toggleShowText: "show password"
			})
		}
	}

	render () {
		return (<div className={'col-12'}>
			<h1>Login</h1>
			<input className={"login--input"} type="text"
			       value={this.state.login}
			       onChange={this.handleLoginChange}
			       placeholder="Twój adres e-mail"/>

			<div>
			<input className={"login--input"} type={this.state.hidden ? "password" : "text"}
			       value={this.state.password}
			       onChange={this.handlePasswordChange}
			       placeholder="hasło"/>
			<button className={"login--button"} onClick={this.toggleShow}>{this.state.toggleShowText}</button>
			</div>

			<button className={"login--button"}>Login</button>

		</div>)
	}
}