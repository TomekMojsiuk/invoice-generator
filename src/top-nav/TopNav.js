import React from 'react';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import './_topNav.scss'
import { MainPanelShadow } from '../main-panel/MainPanel';

export default class TopNav extends React.Component {

	render () {
		return (
			<div className={'row nav--top'}>
				<MainPanelShadow />
				<NavLogo />
				<NavLinks />
			</div>
		)
	}

}
