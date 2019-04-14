import React from 'react'


import SideNav from '../components/SideNav/SideNav';
import ClientsInfo from '../components/ClientsInfo/ClientsInfo';


class Clients extends React.Component{

	render () {
		return ( <div className={"col-10"}>
				<SideNav />
				<ClientsInfo />
			</div>
		)
	}
}

export default Clients;