import React from 'react'
import InvoicesList from '../components/InvoicesList/InvoicesList';
import SideNav from '../components/SideNav/SideNav';

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
			<div className={'main--content--box col-12'}>
				<SideNav />
				<InvoicesList invoices={this.state.invoices} />
			</div>
		)
	}
}

export default InvoiceList;