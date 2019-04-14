import React from 'react'
import {
	Link,
} from 'react-router-dom'

import './_sideNav.scss'

class SideNav extends React.Component {

	render () {
		return (<div className={'nav--side col-2'}>
				<Link to="/">Lista faktur</Link>
				<Link to="/add-invoice">Wystaw fakturę</Link>
			</div>
		)
	}
}

export default SideNav;