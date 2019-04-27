import React from 'react';
import './_invoice.scss';

class Invoices extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			invoices: [],
		};
	}

	componentDidMount () {
		this.setState({});
	}

	render () {

		const invoices = this.props.invoices.map((invoice) => {
			console.log(invoice.invoiceNumber);
		}) || [];

		let counter = 0;

		const MyCol = props => {
			return <div className={'item'} {...props} />;
		};

		return (<div className={'pages--content--container col-10'}>
				<div className={'flex--wrapper--4'}>
				{invoices && invoices.length
					? <h1>Lista faktur</h1>
					: <h1>Brak faktur</h1>}
				<div className={'invoice--list--header'}>
					<MyCol>LP</MyCol>
					<MyCol>Numer faktury</MyCol>
					<MyCol>Data wystawienia</MyCol>
					<MyCol>Data płatności</MyCol>
					<MyCol>Kupujący</MyCol>
					<MyCol>Kwota</MyCol>

				</div>

				<div className={'invoice--list--body'}>
					{this.props.invoices.map(invoice => {
						return (
							<div key={invoice.invoiceNumber} className={`invoice--container`}>
								<MyCol>{counter += 1}</MyCol>
								<MyCol>{invoice.invoiceNumber}</MyCol>
								<MyCol>{invoice.issuingDate}</MyCol>
								<MyCol>{invoice.dueDate}</MyCol>
								<MyCol>{invoice.client.name}</MyCol>
								<MyCol>{`${invoice.products.reduce((acc, product) => {
									return acc + (product.quantity * product.price);
								}, 0)} zł`}</MyCol>
							</div>
						);
					})}
				</div>

				<div className={'row invoice--list--footer'}>
					<MyCol>{counter}</MyCol>
				</div>
			</div>
			</div>
		);
	}
}

export default Invoices;