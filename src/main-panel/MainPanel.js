import React from 'react'

import { LoadingBar } from '../loading-bar/LoadingBar';
import { MainContentInvoices } from './MainContentInvoices';
import {
	HashRouter,
	Route,
	Link,
	Switch,
	NavLink
} from 'react-router-dom'
import { NotFound } from '../top-nav/NavLinks';
import { MainContentLogin } from './MainContentLogin';

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

	/*render () {
			if (this.state.loading === false) {
				return <div className="col-12 app">
					<MainContent />
				</div>
			} else {
				return <div className="col-12 app">
					<LoadingBar />
				</div>
			}

	}*/
	//Renderujemy przełączniki
	render () {
		if (this.state.loading === false) {
			return <div className="row app">
				<MainPanelShadow />
				<HashRouter>
				<Switch>
				<Route exact path="/" component={MainContentLogin}/>
				<Route path="/kontrahenci" component={MainContentInvoices}/>
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

