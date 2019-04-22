import React from 'react';

import './InvoiceAddNewForm.scss';

import RegularButton from '../Buttons/RegularButton/RegularButton';
import GenerateNewProductSale
	from './GenerateNewProductSale/GenerateNewLine';

class InvoiceAddNewForm extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			IssueDateFieldType: 'text',
			DueDateFieldType: 'text',

			chosenSellerName: '',
			chosenSellerNIP: '',
			chosenSellerStreetAddress: '',
			chosenSellerStreetNumber: '',
			chosenSellerPostCode: '',
			chosenSellerCityName: '',

			chosenClientName: '',
			chosenClientNIP: '',
			chosenClientStreetAddress: '',
			chosenClientStreetNumber: '',
			chosenClientPostCode: '',
			chosenClientCityName: '',

			addNewLineCounter: 1,
			addNewLineCounterError: '',

			product: [
				{
					chosenProductName: '',
					chosenProductPrice: '',
					chosenProductQuantity: '',
					chosenProductUnit: '',
					chosenProductVAT: '',
					chosenProductTotal: 0,
				},
			],

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

	handleSellerSelection = (e) => {

		this.props.seller.map(seller => {

			if (e.target.value === seller.sellerName)

				this.setState({
					chosenSellerName: seller.sellerName,
					chosenSellerNIP: seller.sellerNIP,
					chosenSellerStreetAddress: seller.sellerStreetAddress,
					chosenSellerStreetNumber: seller.sellerStreetNumber,
					chosenSellerPostCode: seller.sellerPostCode,
					chosenSellerCityName: seller.sellerCityName,
				});
		});
	};

	handleClientSelection = (e) => {

		//TODO moduł do wyświetlenia danych wyranego klienta w textarea.
		// Przeiterować po klientach, porównać name z kluczem i wyświetlić dane

		this.props.clients.map(client => {

			if (e.target.value === client.clientName)

				this.setState({
					chosenClientName: client.clientName,
					chosenClientNIP: client.clientNIP,
					chosenClientStreetAddress: client.clientStreetAddress,
					chosenClientStreetNumber: client.clientStreetNumber,
					chosenClientPostCode: client.clientPostCode,
					chosenClientCityName: client.clientCityName,
				});
		});

	};

	addNewProduct = () => {

		this.setState((prevState) => {

			return {
				addNewLineCounter: prevState.addNewLineCounter + 1,
				addNewLineCounterError: '',
			};

		});
		console.log(this.state.addNewLineCounter);
	};

	removeNewProduct = () => {
		if (!this.state.addNewLineCounter < 1) {
			this.setState((prevState) => {

				return {
					addNewLineCounter: prevState.addNewLineCounter - 1,
					addNewLineCounterError: '',
				};

			});
		} else {
			this.setState(() => {

				return {
					addNewLineCounter: 0,
					addNewLineCounterError: 'Brak elementów do usunięcia',
				};

			});
		}

		console.log(this.state.addNewLineCounter);
	};

	handleProductSelection = () => {

	};

	render () {

		return (<div className={'col-10 pages--content--container'}>
				<form>
					{/*============================== Dane faktury ==============================*/}

					<div className={'form--section'}>

						<h2 className={'form--section--title'}>Dane faktury</h2>
						<div className={'flex--wrapper'}>

							<div className={'form--input invoice--data'}>
								<label>Numer faktury:</label>
								<input type='text' name="Numer_faktury"
								       placeholder={'numer faktury'}/>
							</div>

							<div className={'form--input invoice--data'}>
								<label>Data wystawienia:</label>
								<input name="issueDate" type={this.state.issueDateFieldType}
								       onFocus={this.handleDateFieldTypeOnFocus}
								       placeholder="Podaj datę wystawienia faktury"/>
							</div>

							<div className={'form--input invoice--data'}>
								<label>Data płatności:</label>
								<input name="dueDate" type={this.state.dueDateFieldType}
								       onFocus={this.handleDateFieldTypeOnFocus}
								       placeholder="Wprowadź datę płatności"/>
							</div>

						</div>
					</div>
					<div className={'flex--wrapper'}>

						{/*============================== Sprzedawca ==============================*/}
						<div className={'form--section seller--data'}>

							<h2 className={'form--section--title'}>Sprzedawca</h2>

							<div className={'form--input'}>

								<select onChange={this.handleSellerSelection}
								        value={this.state.chosenSellerName}>
									<option defaultValue={''}>Wybierz sprzedawcę</option>
									{this.props.seller.map(seller => {
										return <option key={seller.sellerNIP}
										               value={seller.sellerName}>{seller.sellerName}</option>;
									})}
								</select>

							</div>

							<div className={'form--input'}>
								<label>Dane sprzedawcy:</label>
								<textarea className={'form--textarea'}
								          value={(this.state.chosenSellerName) +
								          '\n' + (this.state.chosenSellerStreetAddress) + ' ' +
								          (this.state.chosenSellerStreetNumber) +
								          '\n' + (this.state.chosenSellerPostCode) + ' ' +
								          (this.state.chosenSellerCityName) +
								          '\n' + (this.state.chosenSellerNIP)}/>
							</div>

						</div>

						{/*============================== Nabywca ==============================*/}
						<div className={'form--section client--data'}>

							<h2 className={'form--section--title'}>Nabywca</h2>

							<div className={'form--input'}>

								<select onChange={this.handleClientSelection}
								        value={this.state.chosenClientName}>
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
								          value={(this.state.chosenClientName) +
								          '\n' + (this.state.chosenClientStreetAddress) + ' ' +
								          (this.state.chosenClientStreetNumber) +
								          '\n' + (this.state.chosenClientPostCode) + ' ' +
								          (this.state.chosenClientCityName) +
								          '\n' + (this.state.chosenClientNIP)}/>
							</div>

						</div>

					</div>
					{/*============================== Linia kosztowa ==============================*/}
					<div className={'form--section invoice--details'}>
						<h2 className={'form--section--title'}>Linia kosztowa</h2>
						<div className={"invice--details--buttons--container"}>
							<RegularButton text={'Dodaj'} onClick={this.addNewProduct}/>
							<RegularButton text={'Usuń'} onClick={this.removeNewProduct}/>
							<div>{this.state.addNewLineCounterError}</div>
						</div>
					</div>
					<div className={'form--input'}>
						<GenerateNewProductSale
							addNewLineCounter={this.state.addNewLineCounter}
							onChange={this.handleProductSelection}
							products={this.props.products}/>
					</div>


				</form>
			</div>
		);
	}
}

export default InvoiceAddNewForm;