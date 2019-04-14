import React from 'react';

export class InvoiceList extends React.Component {

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
			return <div className={'col-1 invoice--list--header_title'} {...props} />
		}

		return (<div className={'invoice--list col-10'}>
				{invoices && invoices.length ? <h1>Lista faktur</h1> : <h1>Brak
					faktur</h1>}
				<button>Pobierz faktury</button>
				<div className={'row invoice--list--header'}>
					<MyCol>LP</MyCol>
					<MyCol>Numer faktury</MyCol>
					<MyCol>Data wystawienia</MyCol>
					<MyCol>Data płatności</MyCol>
					{/*<MyCol>Sprzedający</MyCol>
					<MyCol>Kupujący</MyCol>*/}
					<MyCol>Kwota</MyCol>
				</div>

				<div className={'row invoice--list--body'}>
					{this.props.invoices.map(invoice => {
						return (
							<div key={invoice.invoiceNumber} className={`invoice--item--${counter}`}>
								<MyCol>{counter += 1}</MyCol>
								<MyCol>{invoice.invoiceNumber}</MyCol>
								<MyCol>{invoice.invoiceDate}</MyCol>
								<MyCol>{invoice.paymentDate}</MyCol>
								{/*<MyCol>{invoice.seller.name}</MyCol>
								<MyCol>{invoice.buyer.name}</MyCol>*/}
								<MyCol>{`${invoice.products.reduce((acc, product) => {
									return acc + (product.quantity * product.price);
								},0)} zł`}</MyCol>
								<div className={'col-1 invoice--delete'}>X</div>
							</div>
						);
					})}

				</div>
				<div className={'row invoice--list--footer'}>
					<MyCol>{counter}</MyCol>
				</div>
			</div>
		);
	}
}