import React from 'react';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';
import { MainPanel } from '../main-panel/MainPanel';
import TopNav from '../top-nav/TopNav';
import './_loginForm.scss';

export class Controller extends React.Component {

	render () {

		const { handleLogin, handleLogOut, isLoggedIn, isLoginOpen, isRegistrationOpen, loginFailAlert, showLoginBox, showRegistrationBox } = this.props;
		//TODO włączyć widok formularza logowania (usunąć ! poniżej)
		if (!isLoggedIn) {
			return (<div className={'container'}>

					<TopNav handleLogOut={handleLogOut}/>
					<MainPanel />
				</div>
			);
		} else {

			return (<div className={''}>

					<div className="box--controller row">
						<div className={'controls col-5'}>
							<div className={'controller ' +
							(isLoginOpen ? 'controller--selected' : '')}
							     onClick={showLoginBox}>Zaloguj się
							</div>
							<div className={'controller ' +
							(isRegistrationOpen ? 'controller--selected' : '')}
							     onClick={showRegistrationBox}>Zarejestruj się
							</div>
						</div>
					</div>
					<div className={'box--form row'}>
						<div className={'form col-5'}>
							{isLoginOpen && <LoginForm handleLogin={handleLogin}
							                           handleError={loginFailAlert}/>}
							{isRegistrationOpen && <RegistrationForm/>}
						</div>
					</div>
				</div>
			);
		}
	}
}