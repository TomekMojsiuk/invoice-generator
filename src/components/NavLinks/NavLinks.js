import React, { Fragment } from 'react';

import MyLink from '../MyLink/MyLink';

class NavLinks extends React.Component {
	render () {
		const {isLoggesIn, handleLogOut} = this.props
		return (
			<div className={'col-5 nav--top--links-container'}>
				<div className={'nav--top--links'}>
						{(
							!isLoggesIn ?
								<Fragment>
									<MyLink exact to="/">Faktury</MyLink>
									<MyLink exact to="/kontrahenci">Kontrahenci</MyLink>
								</Fragment>
								: null
						)}
					<button className={'btn--logout'} onClick={handleLogOut}>Wyloguj</button>
				</div>
			</div>
		)
	}
}

export default NavLinks;