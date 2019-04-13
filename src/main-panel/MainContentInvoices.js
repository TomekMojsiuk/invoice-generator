import React from 'react'
import invoices from '../data/invoices';
import { InvoiceList } from '../invoices/InvoicesList';
import { MainPanelShadow } from './MainPanel';
import './mainPanel.scss'
import { SideNav } from '../side-nav/SideNav';


export class MainContent extends React.Component {

	render () {
		return (
			<div className={'main--content--box col-8'}>
				<SideNav />
				<MainPanelShadow />
				<InvoiceList invoices={invoices} />
			</div>
		)
	}
}