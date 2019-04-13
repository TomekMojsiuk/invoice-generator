import React from 'react';
import '../app.scss';
import { Controllers } from '../main-controller/MainController';

export class MainContentLogin extends React.Component {

	render () {
		return (
			<div className={'main--content--box'}>
				<Controllers />
			</div>
		);
	}
}