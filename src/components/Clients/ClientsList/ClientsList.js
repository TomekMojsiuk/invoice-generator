import React from 'react';

import './ClientsList.scss';

import AddUserButton from '../../Buttons/AddUserButton/AddUserButton';
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import EditButton from '../../Buttons/EditButton/EditButton';

class ClientsList extends React.Component {

	constructor (props) {
		super(props);
		this.state = {

		};
	}

	render () {

		return (<div className={'col-10 pages--content--container'}>

				<div className={'flex--wrapper--2'}>
					<h1>Klienci</h1>
				</div>

				<div className={'flex--wrapper--3'}>

					{this.props.clients.map(client => {
						return (
							<div className={'content--container--small'}>
								<h1>{client.clientName}</h1>
								<div>{client.clientStreetAddress} {client.clientStreetNumber}</div>
								<div>{client.clientPostCode} {client.clientCityName}</div>
								<div>NIP: {client.clientNIP}</div>

								<div className={'container--small--buttons--section'}>
									<DeleteButton deleteKey={client.id}
									              onClick={this.props.deleteButtonOnClick}/>
									<EditButton key={""}
									            onClick={this.props.editButtonOnClick}/>
								</div>

							</div>);
					})}

					<div className={'content--container--small'}>
						<AddUserButton onClick={this.props.handleAddNewClient} />
					</div>

				</div>

			</div>
		);
	}
}

export default ClientsList;