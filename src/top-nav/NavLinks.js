import React, {Fragment} from 'react'
import {
	HashRouter,
	Route,
	Link,
	Switch,
	NavLink
} from 'react-router-dom'

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
			<div className={'col-5 nav--top--links-container'}>
				<div className={'nav--top--links'}>
					<HashRouter>
						{(
							!isLoggesIn ?
								<Fragment>
									<MyLink exact to="/">Faktury</MyLink>
									<MyLink exact to="/kontrahenci">Kontrahenci</MyLink>
								</Fragment>
								: null
						)}
					</HashRouter>
					<button className={'btn--logout'} onClick={handleLogOut}>Wyloguj</button>
				</div>
			</div>
		)
	}

}