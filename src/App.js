import React, { Component } from 'react';
import './generalScss/app.scss';
import { MainPanel } from './main-panel/MainPanel';
import TopNav from './top-nav/TopNav';
import { Footer } from './footer/Footer';

class App extends Component {
	render () {
		return (<div className={'container'}>
				<TopNav />
				<MainPanel />
				<Footer/>
			</div>
		);
	}
}

export default App;
