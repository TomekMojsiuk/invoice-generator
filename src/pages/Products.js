import React from 'react'

import SideNav from '../components/SideNav/SideNav';

import './_Pages.scss'
import ProductsInformation from '../components/ProductsInformation/ProductsInformation';

class Clients extends React.Component{

	render () {
		return ( <div className={'row main--content--box'}>
				<SideNav />
				<ProductsInformation />
			</div>
		)
	}
}

export default Clients;