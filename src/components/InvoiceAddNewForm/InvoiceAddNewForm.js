import React from 'react';

import './InvoiceAddNewForm.scss';

import GenerateNewProductSale from './GenerateNewProductSale/GenerateNewLine';
import InvoiceGeneralData from './InvoiceGeneralData/InvoiceGeneralData';
import InvoiceSellerInfo from './InvoiceSellerInfo/InvoiceSellerInfo';
import InvoiceClientInfo from './InvoiceClientInfo/InvoiceClientInfo';

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

	/*================ Manage date fields ================*/
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

	handleDateFieldTypeOnBlur = () => {

		this.setState({
			issueDateFieldType: 'text',
			dueDateFieldType: 'text',
		});

	};


	handleSellerSelection = (e) => {

		this.props.sellers.map(seller => {

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

					<InvoiceGeneralData issueDateFieldType={this.state.issueDateFieldType}
					                    dueDateFieldType={this.state.dueDateFieldType}
					                    onFocus={this.handleDateFieldTypeOnFocus}
					                    onBlur={this.handleDateFieldTypeOnBlur}/>

					<div className={'flex--wrapper'}>

						{/*============================== Sprzedawca ==============================*/}

						<InvoiceSellerInfo sellers={this.props.sellers}
						                   selectOnChange={this.handleSellerSelection}
						                   selectValue={this.state.chosenSellerName}
						                   textAreaValue={(this.state.chosenSellerName) +
																'\n' + (this.state.chosenSellerStreetAddress) + ' ' +
																(this.state.chosenSellerStreetNumber) +
																'\n' + (this.state.chosenSellerPostCode) + ' ' +
																(this.state.chosenSellerCityName) +
																'\n' + (this.state.chosenSellerNIP)}/>

						{/*============================== Nabywca ==============================*/}

						<InvoiceClientInfo clients={this.props.clients}
						                   selectOnChange={this.handleClientSelection}
						                   selectValue={this.state.chosenClientName}
						                   textAreaValue={(this.state.chosenClientName) +
						                   '\n' + (this.state.chosenClientStreetAddress) + ' ' +
						                   (this.state.chosenClientStreetNumber) +
						                   '\n' + (this.state.chosenClientPostCode) + ' ' +
						                   (this.state.chosenClientCityName) +
						                   '\n' + (this.state.chosenClientNIP)}/>


					</div>

					{/*============================== Linia kosztowa ==============================*/}

						<GenerateNewProductSale
							addNewLineCounter={this.state.addNewLineCounter}
							addNewLineCounterError={this.state.addNewLineCounterError}
							onChange={this.handleProductSelection}
							products={this.props.products}
							addNewProduct={this.addNewProduct}
							removeNewProduct={this.removeNewProduct} />


				</form>
			</div>
		);
	}
}

export default InvoiceAddNewForm;