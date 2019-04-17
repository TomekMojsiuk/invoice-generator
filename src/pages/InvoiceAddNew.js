import React from 'react'
import SideNav from '../components/SideNav/SideNav';
import InvoiceAddNewForm from '../components/InvoiceAddNewForm/InvoiceAddNewForm';

import './_Pages.scss'

class InvoiceAddNew extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			seller: [],
			clients: [],
			products: [],
			invoices: [],
		}
	}

		componentDidMount() {

			fetch('http://localhost:3001/invoices').
				then(response => response.json()).
				then(invoices => this.setState({
					invoices: invoices,
				})).then(() => {
				console.log(this.state.invoices)
			});

			fetch('http://localhost:3001/clients').
				then(response => response.json()).
				then(clients => this.setState({
					clients: clients,
				})).then(() => {
				console.log(this.state.clients);
			}).catch(error => {
				return error.message;
			})

			fetch('http://localhost:3001/seller').
				then(response => response.json()).
				then(seller => this.setState({
					seller: seller,
				})).then(() => {
				console.log(this.state.seller);
			}).catch(error => {
				return error.message;
			})
		}

		render() {
			return (<div className={'row main--content--box'}>
					<SideNav/>
					<InvoiceAddNewForm clients={this.state.clients} seller={this.state.seller}/>
				</div>
			)
		}
	}

export default InvoiceAddNew;