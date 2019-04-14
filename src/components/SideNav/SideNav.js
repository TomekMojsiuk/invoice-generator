import React from 'react'
import {
	Link, NavLink,
} from 'react-router-dom';

import './_sideNav.scss'


class SideNav extends React.Component {

	render () {
		return (<div className={'col-2 nav--side '}>
				<NavLink className={'nav--side--link'} to="/">Lista faktur</NavLink>
				<NavLink className={'nav--side--link'} to="/add-invoice">Wystaw fakturę</NavLink>
			</div>
		)
	}
}

export default SideNav;