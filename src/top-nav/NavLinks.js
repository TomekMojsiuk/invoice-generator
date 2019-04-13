import React, {Fragment} from 'react'
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

export class NavLinks extends React.Component {


	render () {
		const {isLoggesIn, handleLogOut} = this.props
		return (
			<div className={'col-9 nav--top--links-container'}>
				<div className={'nav--top--links'}>
					<HashRouter>
						{(
							isLoggesIn ?
								<Fragment>

								</Fragment>
								:
								<Fragment>
									<MyLink exact to="/">Faktury</MyLink>
									<MyLink exact to="/kontrahenci">Kontrahenci</MyLink>
									<MyLink exact to="/calendar">Kalendarz</MyLink>
									<MyLink exact to="/contact">Kontakt</MyLink>
								</Fragment>
						)}
					</HashRouter>
					<button onClick={handleLogOut}>Wyloguj</button>
				</div>
			</div>
		)
	}

}