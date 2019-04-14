import React from 'react'

import { LoadingBar } from '../loading-bar/LoadingBar';
import {
	HashRouter,
	Route,
	Link,
	Switch,
	NavLink
} from 'react-router-dom'
import { NotFound } from '../top-nav/NavLinks';
import { InvoiceList } from '../pages/InvoiceList';
import { InvoiceAdd } from '../pages/InvoiceAdd';

//Box with shadow
export class MainPanelShadow extends React.Component {
	render () {
		return <div className={'background--shadow'}></div>
	}
}

//Main panel
export class MainPanel extends React.Component {

	constructor (props) {
		super (props)
		this.state = {
			loading: true
		}
	}

	componentDidMount () {

		this.timeout = setTimeout(() => {
			this.setState({
				loading: false
			})
		},2000)

	}

	//TODO obsługa sideNava
	handleSideNav = () => {

	}

	//Renderujemy przełączniki
	render () {
		if (this.state.loading === false) {
			return <div className="row app">
				<MainPanelShadow />
				<Switch>
					<Route exact path="/" render={() => (<InvoiceList isLoggedIn={this.props.isLoggedIn} loginFailAlert={this.props.loginFailAlert} />)}/>
					<Route exact path="/invoice-list" render={() => (<InvoiceList invoices={this.state.invoices} />)}/>
					<Route path="/add-invoice" render={() => (<InvoiceAdd invoices={this.state.invoices} />)}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
		} else {
			return <div className="col-12 app">
				<LoadingBar />
			</div>
		}

	}

}

