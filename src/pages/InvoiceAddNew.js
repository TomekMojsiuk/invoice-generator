import React from 'react';
import SideNav from '../components/SideNav/SideNav';
import InvoiceAddNewForm
	from '../components/InvoiceAddNewForm/InvoiceAddNewForm';

import './_Pages.scss';

class InvoiceAddNew extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			sellers: [],
			clients: [],
			products: [],
			invoices: [],

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

			invoice: [
				{
					invoiceNumber: "",
					issuingDate: "",
					dueDate: "",
					seller: "",
					client: "",
				}
			],
		};
	}

	componentDidMount () {

		fetch('http://localhost:3001/invoices').
			then(response => response.json()).
			then(invoices => this.setState({
				invoices: invoices,
			})).then(() => {
			console.log(this.state.invoices);
		});

		fetch('http://localhost:3001/clients').
			then(response => response.json()).
			then(clients => this.setState({
				clients: clients,
			})).then(() => {
			console.log(this.state.clients);
		}).catch(error => {
			return error.message;
		});

		fetch('http://localhost:3001/sellers').
			then(response => response.json()).
			then(seller => this.setState({
				sellers: seller,
			})).then(() => {
			console.log(this.state.sellers);
		}).catch(error => {
			return error.message;
		});

		fetch('http://localhost:3001/products').
			then(response => response.json()).
			then(product => this.setState({
				products: product,
			})).then(() => {
			console.log(this.state.products);
		}).catch(error => {
			return error.message;
		});

	}

	handleSellerSelection = (e) => {

		this.state.sellers.map(seller => {

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

		//TODO moduł do wyświetlenia danych wybranego klienta w textarea.
		// Przeiterować po klientach, porównać name z kluczem i wyświetlić dane

		this.state.clients.map(client => {

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

	handleProductSelection = (e) => {

	};

	/*=================================== Invoice handlers ===================================*/

	/*=================================== General info handlers ===================================*/

	handleInvoiceNumber = (e) => {

		this.setState({
			invoiceNumber: e.target.value
		})
	}

	handleIssueDate = (e) => {
		this.setState({
			issuingDate: e.target.value
		})
	}

	handleDueDate = (e) => {
		this.setState({
			dueDate: e.target.value
		})
	}

	/*=================================== Seller & Buyer handlers ===================================*/

	handleInvoiceSeller = () => {

		this.setState({
			seller: [{
				name: this.state.chosenSellerName,
				NIP: this.state.chosenSellerNIP,
				streetAddress: this.state.chosenSellerStreetAddress,
				streetNumber: this.state.chosenSellerStreetNumber,
				postCode: this.state.chosenSellerPostCode,
				cityName: this.state.chosenSellerCityName
			}]
		})
	}

	handleInvoiceClient = () => {

		this.setState({
			buyer: [{
				name: this.state.chosenClientName,
				NIP: this.state.chosenClientNIP,
				streetAddress: this.state.chosenClientStreetAddress,
				streetNumber: this.state.chosenClientStreetNumber,
				postCode: this.state.chosenClientPostCode,
				cityName: this.state.chosenClientCityName
			}]
		})
	}

	/*=================================== Submit handler ===================================*/

	handleFormSubmit = (e) => {
		e.preventDefault();

		const url = 'http://localhost:3001/invoices'
		const products = {

		}
		const invoice = {
			"id": 0,
			"invoiceNumber": this.state.invoiceNumber,
			"issuingDate": this.state.issuingDate,
			"dueDate": this.state.dueDate,
			"seller": {
				"name": this.state.chosenSellerName,
				"NIP": this.state.chosenSellerNIP,
				"streetAddress": this.state.chosenSellerStreetAddress,
				"streetNumber": this.state.chosenSellerStreetNumber,
				"postCode": this.state.chosenSellerPostCode,
				"cityName": this.state.chosenSellerCityName
			} ,
			"client": {
				"name": this.state.chosenClientName,
				"NIP": this.state.chosenClientNIP,
				"streetAddress": this.state.chosenClientStreetAddress,
				"streetNumber": this.state.chosenClientStreetNumber,
				"postCode": this.state.chosenClientPostCode,
				"cityName": this.state.chosenClientCityName
			},
			"products":[
				{
					"name": "product 1",
					"price": "1200",
					"quantity": "3",
					"unit": "kg",
					"vat": "23"
				},
			]
		}

		console.log(invoice);

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(invoice),
			redirect: "manual",
			headers: {
				"Content-Type": "application/json",
			}
		}).then(res => res.json())
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => console.error('Error:', error));
	}

	render () {
		return (<div className={'row main--content--box'}>
				<SideNav/>
				<InvoiceAddNewForm clients={this.state.clients}
				                   sellers={this.state.sellers}
				                   products={this.state.products}

				                   InvoiceNumberOnChange={this.handleInvoiceNumber}
				                   IssueDateOnChange={this.handleIssueDate}
				                   DueDateOnChange={this.handleDueDate}

				                   sellerSelectOnChange={this.handleSellerSelection}
				                   sellerSelectValue={this.state.chosenSellerName}
				                   sellerTextAreaValue={(this.state.chosenSellerName) +
														'\n' + (this.state.chosenSellerStreetAddress) + ' ' +
														(this.state.chosenSellerStreetNumber) +
														'\n' + (this.state.chosenSellerPostCode) + ' ' +
														(this.state.chosenSellerCityName) +
														'\n' + (this.state.chosenSellerNIP)}

				                   clientSelectOnChange={this.handleClientSelection}
				                   clientSelectValue={this.state.chosenClientName}
				                   clientTextAreaValue={(this.state.chosenClientName) +
				                   '\n' + (this.state.chosenClientStreetAddress) + ' ' +
				                   (this.state.chosenClientStreetNumber) +
				                   '\n' + (this.state.chosenClientPostCode) + ' ' +
				                   (this.state.chosenClientCityName) +
				                   '\n' + (this.state.chosenClientNIP)}

				                   InvoiceSeller={this.handleInvoiceSeller}
				                   InvoiceClient={this.handleInvoiceClient}

				                   addNewLineCounter={this.state.addNewLineCounter}
				                   addNewLineCounterError={this.state.addNewLineCounterError}
				                   productOnChange={this.handleProductSelection}
				                   addNewProduct={this.addNewProduct}
				                   removeNewProduct={this.removeNewProduct}

				                   onSubmit={this.handleFormSubmit}
				/>

			</div>
		);
	}
}

export default InvoiceAddNew;