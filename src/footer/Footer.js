import React from 'react';
import './footer.scss'
import { MainPanelShadow } from '../main-panel/MainPanel';

export class Footer extends React.Component {

	render () {
		return ( <div className={'footer'}>
			<MainPanelShadow />
			<div className={'footer--text'}>
			<p>Copyright TM 2019</p>
			<p>Photo by Expect Best from Pexels</p>
			</div>
			</div>
			)
	}
}