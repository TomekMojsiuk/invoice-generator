import React from 'react';

import InvoiceList from '../../pages/InvoiceList';
import InvoiceAdd from '../../pages/InvoiceAdd';

import LoadingBar from '../LoadingBar/LoadingBar';
import MainPanelShadow from '../MainPanelShadow/MainPanelShadow';

//Main panel
class MainPanel extends React.Component {

	constructor (props) {
		super (props)
		this.state = {
			loading: true
		}
	}

	componentDidMount () {

		this.timeout = setTimeout(() => {
			this.setState({
				loading: false
			})
		},2000)

	}

	//TODO obsługa sideNava
	handleSideNav = () => {

	}

	//Renderujemy przełączniki
	render () {
		if (this.state.loading === false) {
			return <div className="row app">
				<MainPanelShadow />
			</div>
		} else {
			return <div className="col-12 app">
				<LoadingBar />
			</div>
		}
	}
}

export default MainPanel;

