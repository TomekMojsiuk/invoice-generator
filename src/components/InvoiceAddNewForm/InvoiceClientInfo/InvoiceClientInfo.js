import React from 'react'

class InvoiceClientInfo extends React.Component {

	constructor (props) {
		super(props);

	}


	render () {
		return (<div className={'form--section client--data'}>

				<h2 className={'form--section--title'}>Nabywca</h2>

				<div className={'form--input'}>

					<select onChange={this.props.selectOnChange}
					        value={this.props.selectValue}>
						<option defaultValue={''}>Wybierz klienta</option>
						{this.props.clients.map(client => {
							return <option key={client.clientNIP}
							               value={client.clientName}>{client.clientName}</option>;
						})}
					</select>

				</div>

				<div className={'form--input'}>
					<label>Dane nabywcy:</label>
					<textarea className={'form--textarea'} type='text'
					          name="Dane Nabywcy"
					          placeholder={'Wybierz z listy lub wprowadź dane ręcznie'}
					          value={this.props.textAreaValue}/>
				</div>

			</div>
		);
	}
}

export default InvoiceClientInfo