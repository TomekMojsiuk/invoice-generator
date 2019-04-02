import React from 'react'
import './topNav.scss'

export class NavLinks extends React.Component {

	render () {
		return (
			<div className={'col-9 nav--top--links-container'}>
				<ul className={'nav--top--links'}>
				<li>Nav item 1</li>
				<li>Nav item 2</li>
				<li>Nav item 3</li>
				<li>Nav item 4</li>
				</ul>
			</div>
		)
	}

}