import React from 'react';

import './ClientsList.scss';

import AddNewButton from '../../Buttons/AddNewButton/AddNewButton';
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import EditButton from '../../Buttons/EditButton/EditButton';

class ClientsList extends React.Component {

	constructor (props) {
		super(props);
		this.state = {};
	}

	render () {

		return (<div className={'col-10 pages--content--container'}>

				<div className={'flex--wrapper--2'}>
					<h1>Kontrahenci</h1>
					<div className={'buttons--section position--top'}>
						<AddNewButton onClick={this.props.handleAddNewClient}/>
					</div>
				</div>

				<div className={'flex--wrapper--1'}>

					{this.props.clients.map(client => {
						return (<div className={'content--container--small'}>
							<h1>{client.clientName}</h1>
							<div>{client.clientStreetAddress} {client.clientStreetNumber}</div>
							<div>{client.clientPostCode} {client.clientCityName}</div>
							<div>NIP: {client.clientNIP}</div>
							<div className={'container--small--buttons--section'}>
								<DeleteButton/>
								<EditButton/>
							</div>


						</div>);
					})}

				</div>

				<div className={'flex--wrapper--2'}>
					<div className={'buttons--section position--bottom'}>
						<AddNewButton onClick={this.props.handleAddNewClient}/>
					</div>
				</div>

			</div>
		);
	}
}

export default ClientsList;