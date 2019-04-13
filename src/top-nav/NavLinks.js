import React from 'react'
import {
	HashRouter,
	Route,
	Link,
	Switch,
	NavLink
} from 'react-router-dom'

import { MainPanel } from '../main-panel/MainPanel'

export class NotFound extends React.Component {
	render () {
		return (<div className={'link--not--found'}>
			<h1>404</h1>
			<h1>Nie ma takiej strony :(</h1>
		</div>)
	}
}

const MyLink = props => {
	return <NavLink className={'nav--item'} {...props} /> //Rozsmarowujemy wszystkie pozostałe propsy, które przekażemy do NavLink
}

class NavItems extends React.Component {

	render () {
		return (
			<div className={'col-9 nav--top--links-container'}>
				<div className={'nav--top--links'}>
					<MyLink exact to="/">Home</MyLink>
					<MyLink exact to="/kontrahenci">Kontrahenci</MyLink>
					<MyLink exact to="/calendar">Kalendarz</MyLink>
					<MyLink exact to="/contact">Kontakt</MyLink>
				</div>
			</div>
		)
	}

}

export class NavLinks extends React.Component {

	render () {
		return (
			<div>
				<HashRouter>
					<NavItems />
				</HashRouter>
			</div>
		);
	}
}