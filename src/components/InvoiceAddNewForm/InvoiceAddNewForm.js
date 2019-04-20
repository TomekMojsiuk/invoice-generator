import React from 'react';

import './InvoiceAddNewForm.scss';

class InvoiceAddNewForm extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			IssueDateFieldType: 'text',
			DueDateFieldType: 'text',

		};
	}

	handleDateFieldTypeOnFocus = (e) => {

		if (e.target.name === 'issueDate') {
			this.setState({
				issueDateFieldType: 'date',
				dueDateFieldType: 'text',
			});
		} else {
			this.setState({
				issueDateFieldType: 'text',
				dueDateFieldType: 'date',
			});
		}
	};

	render () {

		let { sellerId, sellerName, sellerNIP, sellerStreetAddress, sellerStreetNumber, sellerPostCode, sellerCityName } = this.props.seller;

		return (<div className={'col-10 pages--content--container'}>
				<form>

					<div className={'form--section invoice'}>

						<h2 className={'form--section--title'}>Dane faktury</h2>

						<div className={'form--input'}>
							<label>Numer faktury:</label>
							<input type='text' name="Numer_faktury"
							       placeholder={'numer faktury'}/>
						</div>

						<div className={'form--input'}>
							<label>Data wystawienia:</label>
							<input name="issueDate" type={this.state.issueDateFieldType}
							       onFocus={this.handleDateFieldTypeOnFocus}
							       placeholder="Podaj datę wystawienia faktury"/>
						</div>

						<div className={'form--input'}>
							<label>Data płatności:</label>
							<input name="dueDate" type={this.state.dueDateFieldType}
							       onFocus={this.handleDateFieldTypeOnFocus}
							       placeholder="Wprowadź datę płatności"/>
						</div>

					</div>
					<div className={'flex-wrapper'}>
						<div className={'form--section seller'}>
							<h2 className={'form--section--title'}>Sprzedawca</h2>

							<div className={'form--input'}>
								<input type="text" value={sellerId}
								       placeholder={'Id'}/>
								<input type="text" value={sellerName}
								       placeholder={'Nazwa sprzedawcy'}/>
								<input type="text" value={sellerNIP}
								       placeholder={'NIP sprzedawcy'}/>
								<input type="text" value={sellerStreetAddress}
								       placeholder={'Adres sprzedawcy'}/>
								<input type="text" value={sellerStreetNumber}
								       placeholder={'Numer budynku sprzedawcy'}/>
								<input type="text" value={sellerPostCode}
								       placeholder={'Kod pocztowy sprzedawcy'}/>
								<input type="text" value={sellerCityName}
								       placeholder={'Miejscowość sprzedawcy'}/>
							</div>

						</div>

						<div className={'form--section client'}>

							<h2 className={'form--section--title'}>Nabywca</h2>

							<div className={'form--input'}>
								<select value={this.props.clients} multiple={false}>
									<option defaultValue={''}>Wybierz klienta</option>
									{this.props.clients.map(client => {
										return <option key={client.clientNIP}
										               value={client.clientName}>{client.clientName}</option>;
									})}
								</select>

							</div>
						</div>
					</div>
					<div className={'form--section invoice'}><h2
						className={'form--section--title'}>Linia kosztowa</h2></div>

				</form>
			</div>
		);
	}
}

export default InvoiceAddNewForm;