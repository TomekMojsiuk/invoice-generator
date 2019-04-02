import React from 'react'
import invoices from '../data/invoices';
import { InvoiceList } from '../invoices/InvoicesList';
import { MainPanelShadow } from './MainPanel';
import './mainPanel.scss'


export class MainContent extends React.Component {

	render () {
		return (
			<div className={'main--content--box'}>
				<MainPanelShadow />
				<InvoiceList invoices={invoices} />
			</div>
		)
	}
}