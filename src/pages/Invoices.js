import React from 'react'
import invoices from '../data/invoices';
import { InvoiceList } from '../invoices/InvoicesList';
import { SideNav } from '../side-nav/SideNav';


export class Invoices extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			invoices: []
		}
	}

	componentDidMount () {

		fetch('http://localhost:3001/faktury').
			then(response => response.json()).
			then(invoices => this.setState({
				invoices: invoices,
			})).then(() => {
			console.log(this.state.invoices);
		});

	}

	render () {

		return (
			<div className={'main--content--box col-12'}>
				<SideNav/>
				<InvoiceList invoices={this.state.invoices} />
			</div>
		)
	}
}