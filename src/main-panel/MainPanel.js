import React from 'react'

import { LoadingBar } from '../loading-bar/LoadingBar';
import { Invoices } from '../pages/Invoices';
import {
	HashRouter,
	Route,
	Link,
	Switch,
	NavLink
} from 'react-router-dom'
import { NotFound } from '../top-nav/NavLinks';

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

	//Renderujemy przełączniki
	render () {
		if (this.state.loading === false) {
			return <div className="row app">
				<MainPanelShadow />
				<HashRouter>
				<Switch>
				<Route exact path="/" render={() => (<Invoices isLoggedIn={this.props.isLoggedIn} loginFailAlert={this.props.loginFailAlert} />)}/>
				<Route component={NotFound}/>
			</Switch>
				</HashRouter>
			</div>
		} else {
			return <div className="col-12 app">
				<LoadingBar />
			</div>
		}

	}

}

