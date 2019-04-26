import React from 'react';

import SideNav from '../components/SideNav/SideNav';

import './_Pages.scss';
import ClientsList from '../components/Clients/ClientsList/ClientsList';
import AddClient from '../components/Clients/AddClient/AddClient';

class Clients extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			url: 'http://localhost:3001/clients',
			clients: [],

			id: 0,
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

		fetch(this.state.url).
			then(response => response.json()).
			then(clients => this.setState({
				clients: clients,
			})).then(() => {
			console.log(this.state.clients);
		}).catch(error => {
			return error.message;
		});
	}

	displayNewUserForm = () => {

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

		this.setState({
			clientNIP: e.target.value,
		});

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

	/*====================================== Client add, remove, edit handlers ======================================*/

	handleReturn = (e) => {
		this.setState({
			addNewClient: false
		})
	}
	handleAddNewClient = (e) => {
		e.preventDefault();

		let url = this.state.url;

		let client = {
			'id': 0,
			'clientName': this.state.clientName,
			'clientNIP': this.state.clientNIP,
			'clientStreetAddress': this.state.clientStreetAddress,
			'clientStreetNumber': this.state.clientStreetNumber,
			'clientPostCode': this.state.clientPostCode,
			'clientCityName': this.state.clientCityName,
		};

		console.log(client);

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(client),
			redirect: 'manual',
			headers: {
				'Content-Type': 'application/json',
			},
		}).
			then(res => res.json()).
			then(response => console.log('Success:', JSON.stringify(response))).
			catch(error => console.error('Error:', error));

	};

	handleEditClientData = (e) => {

		this.state.clients.find(client => {

			if (client.clientId === e.target.id) {

				return client;

			}

			/*		this.setState({

					})*/

		});

	};

	handleDeleteClientData = (e) => {

		this.state.clients.find(client => {

			if (client.id === +e.target.id) {

				return (fetch('http://localhost:3001/clients' + '/' + client.id, {
			method: 'DELETE',
			body: JSON.stringify(client),
			redirect: 'manual',
			headers: {
				'Content-Type': 'application/json',
			},
		}).
			then(res => res.json()).
			then(response => console.log('Success:', JSON.stringify(response))).
			catch(error => console.error('Error:', error))
			)
		}
		})
	}

	/*====================================== Form Validation ======================================*/

	showValidationError (elm, msg) {
		this.setState((prevState) => ({
			errorMessage: [
				...prevState.errorMessage,
				{ elm, msg }],
		}));
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

		let clientNameError = null;

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
					             handleAddNewClient={this.displayNewUserForm}
					             handleEditClientData={this.handleEditClientData}
					             editButtonOnClick={this.handleEditClientData}
					             deleteButtonOnClick={this.handleDeleteClientData}

					/>

				) : (

					<AddClient handleClientName={this.handleClientName}
					           handleClientNIP={this.handleClientNIP}
					           handleClientStreetAddress={this.handleClientStreetAddress}
					           handleClientStreetNumber={this.handleClientStreetNumber}
					           handleClientPostCode={this.handleClientPostCode}
					           handleClientCityName={this.handleClientCityName}
					           nipErrorAlert={this.state.errorMessage}
					           handleAddNewClient={this.handleAddNewClient}
					           handleReturn={this.handleReturn}
					/>
				)
				}
			</div>
		);
	}
}

export default Clients;