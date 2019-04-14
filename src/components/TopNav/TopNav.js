import React from 'react';

import NavLogo from '../NavLogo/NavLogo';
import NavLinks from '../NavLinks/NavLinks';
import MainPanelShadow from '../MainPanel/MainPanel';

class TopNav extends React.Component {

	render () {
		return (
			<div className={'row nav--top'}>
				<MainPanelShadow />
				<NavLogo />
				<NavLinks isLoggesIn={this.props.isLoggesIn} handleLogOut={this.props.handleLogOut} />
			</div>
		)
	}

}

export default TopNav;