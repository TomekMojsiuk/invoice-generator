import React from 'react'

import SideNav from '../components/SideNav/SideNav';
import ClientsInformation from '../components/ClientsInformation/ClientsInformation';

import './_Pages.scss'

class Clients extends React.Component{

	render () {
		return ( <div className={'row main--content--box'}>
				<SideNav />
				<ClientsInformation />
			</div>
		)
	}
}

export default Clients;