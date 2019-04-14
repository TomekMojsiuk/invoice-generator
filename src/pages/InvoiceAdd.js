import React from 'react'
import SideNav from '../components/SideNav/SideNav';
import InvoiceAddForm from '../components/InvoiceAddForm/InvoiceAddForm';

class InvoiceAdd extends React.Component{

	constructor (props) {
		super(props);
		this.state = {
			newInvoice: []
		}
	}

	render () {
		return (<div className={'col-10'}>
				<SideNav />
				<InvoiceAddForm/>
		</div>
		)
	}
}

export default InvoiceAdd;