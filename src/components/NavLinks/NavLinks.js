import React, { Fragment } from 'react';

import MyLink from '../MyLink/MyLink';

class NavLinks extends React.Component {
	constructor (props) {
		super(props)


	}

	render () {

		console.log(this.props.isLoggedIn);

		const {isLoggedIn, handleLogOut} = this.props

		return (
			<div className={'col-5 nav--top--links-container'}>
				<div className={'nav--top--links'}>
						{(
							isLoggedIn ?
								<Fragment>
									<MyLink exact to="/">Faktury</MyLink>
									<MyLink exact to="/kontrahenci">Kontrahenci</MyLink>
									<button className={'btn--logout'} onClick={handleLogOut}>Wyloguj</button>
								</Fragment>
								:
								<Fragment>
									<MyLink exact to="/">Zaloguj</MyLink>
								</Fragment>
						)}

				</div>
			</div>
		)
	}
}

export default NavLinks;