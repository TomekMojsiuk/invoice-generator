import React from 'react'
import SideNav from '../components/SideNav/SideNav';
import InvoiceAddNewForm from '../components/InvoiceAddNewForm/InvoiceAddNewForm';

import './_Pages.scss'

class InvoiceAddNew extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			sellers: [],
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

			fetch('http://localhost:3001/sellers').
				then(response => response.json()).
				then(seller => this.setState({
					sellers: seller,
				})).then(() => {
				console.log(this.state.sellers);
			}).catch(error => {
				return error.message;
			})

			fetch('http://localhost:3001/products').
				then(response => response.json()).
				then(product => this.setState({
					products: product,
				})).then(() => {
				console.log(this.state.products);
			}).catch(error => {
				return error.message;
			})
		}

		render() {
			return (<div className={'row main--content--box'}>
					<SideNav/>
					<InvoiceAddNewForm clients={this.state.clients} sellers={this.state.sellers} products={this.state.products}/>
				</div>
			)
		}
	}

export default InvoiceAddNew;