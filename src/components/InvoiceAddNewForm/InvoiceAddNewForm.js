import React from 'react';

import './InvoiceAddNewForm.scss';

import InvoiceGeneralData from './InvoiceGeneralData/InvoiceGeneralData';
import InvoiceSellerInfo from './InvoiceSellerInfo/InvoiceSellerInfo';
import InvoiceClientInfo from './InvoiceClientInfo/InvoiceClientInfo';
import RegularButton from '../Buttons/RegularButton/RegularButton';
import GenerateNewLine from './GenerateNewLine/GenerateNewLine';

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

					<div className={'flex--wrapper--1'}>

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

						<GenerateNewLine
							addNewLineCounter={this.props.addNewLineCounter}
							addNewLineCounterError={this.props.addNewLineCounterError}
							onChange={this.props.productOnChange}
							products={this.props.products}
							addNewProduct={this.props.addNewProduct}
							removeNewProduct={this.props.removeNewProduct} />

					<RegularButton text={'Wystaw fakturę VAT'} onClick={this.props.onSubmit}/>

				</form>



			</div>
		);
	}
}

export default InvoiceAddNewForm;