import React from 'react'
import invoices from '../data/invoices';
import { InvoiceList } from '../invoices/InvoicesList';
import { SideNav } from '../side-nav/SideNav';


export class Invoices extends React.Component {

	render () {
		return (
			<div className={'main--content--box col-12'}>
				<SideNav />
				<InvoiceList invoices={invoices} />
			</div>
		)
	}
}