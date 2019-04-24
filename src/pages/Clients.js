import React from 'react';

import SideNav from '../components/SideNav/SideNav';

import './_Pages.scss';
import ClientsList from '../components/Clients/ClientsList/ClientsList';
import AddClient from '../components/Clients/AddClient/AddClient';

class Clients extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			clients: [],

			clientId: '',
			clientName: '',
			clientNIP: '',
			clientStreetAddress: '',
			clientStreetNumber: '',
			clientPostCode: '',
			clientCityName: '',

			addNewClient: false,

			errorMessage: [],
		};
	}

	componentDidMount () {

		fetch('http://localhost:3001/clients').
			then(response => response.json()).
			then(clients => this.setState({
				clients: clients,
			})).then(() => {
			console.log(this.state.clients);
		}).catch(error => {
			return error.message;
		});
	}

	handleAddNewClient = () => {
		this.setState({
			addNewClient: true,
		});

	};

	/*====================================== Client data handlers ======================================*/

	handleClientName = (e) => {
		this.setState({
			clientName: e.target.value,
		});

	};

	handleClientNIP = (e) => {

		(e.target.value.length < 10) ? (
			this.setState({
				nipErrorAlert: false,
				clientNIP: e.target.value,
			})
			) : (
				this.setState({
					nipErrorAlert: true,
		})
		)

	};

	handleClientStreetAddress = (e) => {
		this.setState({
			clientStreetAddress: e.target.value,
		});

	};

	handleClientStreetNumber = (e) => {
		this.setState({
			clientStreetNumber: e.target.value,
		});

	};

	handleClientPostCode = (e) => {
		this.setState({
			clientPostCode: e.target.value,
		});

	};

	handleClientCityName = (e) => {
		this.setState({
			clientCityName: e.target.value,
		});

	};

	/*====================================== Form Validation ======================================*/

	showValidationError (elm, msg) {
		this.setState((prevState) => ({ errorMessage: [...prevState.errorMessage, { elm, msg }] }));
	}

	handleValidation (e) {

		if (this.state.clientName === '') {
			this.showValidationError('clientName',
				'Nazwa kontrahenta nie może być pusta');
		}
		/*if (this.state.email === '') {
			this.showValidationError('email', 'Email nie może być pusty');
		}
		if (this.state.password === '') {
			this.showValidationError('password', 'Hasło nie może bybć puste');
		}*/
	}

	render () {

		let clientNameError = null

		for (let err of this.state.errorMessage) {

			if (err.elm === 'clientName') {
				clientNameError = err.msg;
			}
			/*if (err.elm === 'email') {
				userEmailError = err.msg;
			}
			if (err.elm === 'password') {
				userPasswordError = err.msg;
			}*/

		}

		return (<div className={'row main--content--box'}>
				<SideNav/>

				{!this.state.addNewClient ? (

					<ClientsList clients={this.state.clients}
					             handleAddNewClient={this.handleAddNewClient}
					/>

				) : (

					<AddClient handleClientName={this.handleClientName}
					           handleClientNIP={this.handleClientNIP}
					           handleClientStreetAddress={this.handleClientStreetAddress}
					           handleClientStreetNumber={this.handleClientStreetNumber}
					           handleClientPostCode={this.handleClientPostCode}
					           handleClientCityName={this.handleClientCityName}
					           nipErrorAlert={this.state.errorMessage}
					/>
				)
				}
			</div>
		);
	}
}

export default Clients;