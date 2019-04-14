import React from 'react';
import { NavLink } from 'react-router-dom'

const MyLink = props => {
	return <NavLink className={'nav--item'} {...props} /> //Rozsmarowujemy wszystkie pozostałe propsy, które przekażemy do NavLink
}

export default MyLink;