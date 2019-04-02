import React from 'react'

import { LoadingBar } from './LoadingBar';
import { MainContent } from './MainContent';

//Box with shadow
export class MainPanelShadow extends React.Component {
	render () {
		return <div className={'background--shadow'}></div>
	}
}

//Main panel
export class MainPanel extends React.Component {

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

	render () {
			if (this.state.loading === false) {
				return <div className="app container">
					<MainContent />
				</div>
			} else {
				return <div className="app container">
					<LoadingBar />
				</div>
			}

	}

}