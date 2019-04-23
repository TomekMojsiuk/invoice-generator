import React from 'react'
import { NavLink } from 'react-router-dom';

import './_sideNav.scss'


class SideNav extends React.Component {

	render () {
		return (<div className={'col-2 nav--side '}>
				<NavLink className={'nav--side--link'} to="/">Lista faktur</NavLink>
				<NavLink className={'nav--side--link'} to="/add-invoice">Wystaw fakturę</NavLink>
				<NavLink className={'nav--side--link'} to="/clients">Kontrahenci</NavLink>
				<NavLink className={'nav--side--link'} to="/products">Produkty</NavLink>
			</div>
		)
	}
}

export default SideNav;