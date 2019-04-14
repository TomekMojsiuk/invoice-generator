import React from 'react'
import SideNav from '../components/SideNav/SideNav';
import InvoiceAddForm from '../components/InvoiceAddForm/InvoiceAddForm';

import './_Pages.scss'

class InvoiceAdd extends React.Component{

	constructor (props) {
		super(props);
		this.state = {
			newInvoice: []
		}
	}

	render () {
		return (<div className={'row main--content--box'}>
				<SideNav />
				<InvoiceAddForm />
			</div>
		)
	}
}

export default InvoiceAdd;