import React from 'react'
import {
	HashRouter,
	Route,
	Link,
	Switch,
	NavLink
} from 'react-router-dom'

import './_sideNav.scss'


export class SideNav extends React.Component {

	render () {
		return (<div className={'nav--side col-2'}>
				<Link to="/">Lista faktur</Link>
				<Link to="/add-invoice">Wystaw fakturę</Link>
			</div>
		)
	}
}