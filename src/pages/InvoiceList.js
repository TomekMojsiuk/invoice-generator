import React from 'react'
import Invoices from '../components/Invoices/Invoices';
import SideNav from '../components/SideNav/SideNav';

import './_Pages.scss'

class InvoiceList extends React.Component {

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

	sideNavRouter = () => {

	}

	addInvoice = () => {



	}


	render (){

		return (
			<div className={'row main--content--box'}>
				<SideNav />
				<Invoices invoices={this.state.invoices} />
			</div>
		)
	}
}

export default InvoiceList;