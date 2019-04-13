import React, { Component } from 'react';
import './app.scss';
import { MainPanel } from './main-panel/MainPanel';
import TopNav from './top-nav/TopNav';
import { Footer } from './footer/Footer';
import BackgroundImg from './BackgroundImg'

class App extends Component {

	render () {
		return (<div className={'container'}>
				<BackgroundImg />
				<TopNav />
				<MainPanel />
				<Footer/>
			</div>
		);
	}
}

export default App;
