import React from 'react';

import SideNav from '../components/SideNav/SideNav';

import './_Pages.scss';
import ClientsInformation
	from '../components/ClientsInformation/ClientsInformation';

class Clients extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			clients: []
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

	render () {
		return (<div className={'row main--content--box'}>
				<SideNav/>
				<ClientsInformation clients={this.state.clients} />
			</div>
		);
	}
}

export default Clients;