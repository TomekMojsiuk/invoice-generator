import React from 'react';

import './InvoiceAddNewForm.scss';

import InvoiceGeneralData from './InvoiceGeneralData/InvoiceGeneralData';
import InvoiceSellerInfo from './InvoiceSellerInfo/InvoiceSellerInfo';
import InvoiceClientInfo from './InvoiceClientInfo/InvoiceClientInfo';
import GenerateNewProductSale from './GenerateNewProductSale/GenerateNewLine';
import RegularButton from '../Buttons/RegularButton/RegularButton';

class InvoiceAddNewForm extends React.Component {

	constructor (props) {
		super(props);

		this.state = {

			IssueDateFieldType: 'text',
			DueDateFieldType: 'text',

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

	/*handleFormSubmit = (e) => {

		e.preventDefault()

			const url = 'http://localhost:3001/invoices'
			/!*const invoice = {
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
			}*!/
			const invoice = {
				"id": 0,
				"invoiceNumber": this.props.invoiceNumber,
				"issuingDate": this.props.issuingDate,
				"dueDate": this.props.dueDate,
				"seller": {
					"name": this.props.chosenSellerName,
					"NIP": this.props.chosenSellerNIP,
					"streetAddress": this.props.chosenSellerStreetAddress,
					"streetNumber": this.props.chosenSellerStreetNumber,
					"postCode": this.props.chosenSellerPostCode,
					"cityName": this.props.chosenSellerCityName
				},
				"client": {
					"name": this.props.chosenClientName,
					"NIP": this.props.chosenClientNIP,
					"streetAddress": this.props.chosenClientStreetAddress,
					"streetNumber": this.props.chosenClientStreetNumber,
					"postCode": this.props.chosenClientPostCode,
					"cityName": this.props.chosenClientCityName
				},
				"products": [
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
				body: JSON.stringify(invoice)
			}).
				then(res => res.json()).
				then(response => console.log('Success:', JSON.stringify(response))).
				catch(error => console.error('Error:', error));
	}*/

	render () {

		return (<div className={'col-10 pages--content--container'}>
				<form onSubmit={this.props.onSubmit}>

					{/*============================== Dane faktury ==============================*/}

					<InvoiceGeneralData issueDateFieldType={this.state.issueDateFieldType}
					                    dueDateFieldType={this.state.dueDateFieldType}
					                    onFocus={this.handleDateFieldTypeOnFocus}
					                    onBlur={this.handleDateFieldTypeOnBlur}
					                    InvoiceNumberOnChange={this.props.InvoiceNumberOnChange}
					                    IssueDateOnChange={this.props.IssueDateOnChange}
					                    DueDateOnChange={this.props.DueDateOnChange}
					/>

					<div className={'flex--wrapper'}>

						{/*============================== Sprzedawca ==============================*/}

						<InvoiceSellerInfo sellers={this.props.sellers}
						                   sellerSelectOnChange={this.props.sellerSelectOnChange}
						                   sellerSelectValue={this.props.sellerSelectValue}
						                   sellerTextAreaValue={this.props.sellerTextAreaValue}
						                   InvoiceSeller={this.props.InvoiceSeller}
						/>

						{/*============================== Nabywca ==============================*/}

						<InvoiceClientInfo clients={this.props.clients}
						                   clientSelectOnChange={this.props.clientSelectOnChange}
						                   clientSelectValue={this.props.clientSelectValue}
						                   clientTextAreaValue={this.props.clientTextAreaValue}
						                   InvoiceClient={this.props.InvoiceClient}
						/>

					</div>

					{/*============================== Linia kosztowa ==============================*/}

						<GenerateNewProductSale
							addNewLineCounter={this.props.addNewLineCounter}
							addNewLineCounterError={this.props.addNewLineCounterError}
							onChange={this.props.productOnChange}
							products={this.props.products}
							addNewProduct={this.props.addNewProduct}
							removeNewProduct={this.props.removeNewProduct} />

					<RegularButton text={'Wystaw fakturę VAT'}/>
					<button className={"button--regular"} type={'submit'} onSubmit={e => e.preventDefault(this)}>Wystaw fakturę VAT</button>

				</form>



			</div>
		);
	}
}

export default InvoiceAddNewForm;