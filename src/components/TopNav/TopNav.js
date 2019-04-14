import React from 'react';

import './_topNav.scss'
import NavLogo from '../NavLogo/NavLogo';
import NavLinks from '../NavLinks/NavLinks';
import MainPanelShadow from '../MainPanel/MainPanel';

class TopNav extends React.Component {

	render () {
		return (
			<div className={'row nav--top'}>
				<MainPanelShadow />
				<NavLogo />
				<NavLinks isLoggedIn={this.props.isLoggedIn} handleLogOut={this.props.handleLogOut} />
			</div>
		)
	}

}

export default TopNav;