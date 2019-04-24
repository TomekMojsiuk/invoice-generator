import React from 'react';
import AddNewButton from '../Buttons/AddNewButton/AddNewButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';

import './ClientsInformation.scss'
import EditButton from '../Buttons/EditButton/EditButton';

class ClientsInformation extends React.Component {

	constructor (props) {
		super(props)
		this.state = {

		}
	}

	render () {

		return (<div className={'col-10 pages--content--container'}>

				<h1>Hello</h1>

				<div className={'flex--wrapper--2'}>
					<AddNewButton />
				{this.props.clients.map(client => {
					return(<div className={'content--container--small'}>
						<h1>{client.clientName}</h1>
						<div>{client.clientStreetAddress} {client.clientStreetNumber}</div>
						<div>{client.clientPostCode} {client.clientCityName}</div>
						<div>NIP: {client.clientNIP}</div>
						<DeleteButton />

						<EditButton/>

					</div>)
				})}
				</div>

			</div>
		)
	}
}

export default ClientsInformation;