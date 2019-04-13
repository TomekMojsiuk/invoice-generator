import React from 'react';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';

import { MainPanelShadow } from '../main-panel/MainPanel';

export default class TopNav extends React.Component {

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
