import React from 'react';
import RegularButton from '../../Buttons/RegularButton/RegularButton';

import './AddClient.scss';

class AddClient extends React.Component {

	render () {

		return (
			<div className={'col-10 pages--content--container'}>

				<div className={'flex--wrapper--2'}>
					<h1>Dodaj klienta</h1>
				</div>

				<div className={'add--client--form__container'}>

					<form onSubmit={this.props.handleAddNewClient}>
						<div className={'flex--wrapper--2'}>

							<div className={'form--input'}>
								<label>Nazwa firmy</label>
								<input type='text'
								       name="nazwa"
								       placeholder={'Nazwa firmy'}
								       onChange={this.props.handleClientName}
								/>
							</div>
							<div className={'flex--wrapper--1'}>

								<div className={'form--input'}>
									<label>Ulica</label>
									<input type='text'
									       name="ulica"
									       placeholder={'Ulica'}
									       onChange={this.props.handleClientStreetAddress}
									/>
								</div>

								<div className={'form--input'}>
									<label>Numer</label>
									<input type='text'
									       name="numer"
									       placeholder={'Numer'}
									       onChange={this.props.handleClientStreetNumber}
									/>
								</div>
							</div>


							<div className={'form--input'}>
								<label>Kod pocztowy</label>
								<input type='text'
								       name="kod"
								       placeholder='Kod pocztowy'
								       onChange={this.props.handleClientPostCode}
								/>
							</div>

							<div className={'form--input'}>
								<label>Miasto</label>
								<input type='text'
								       name="miasto"
								       placeholder={'Miasto'}
								       onChange={this.props.handleClientCityName}
								/>
							</div>

							<div className={'form--input'}>
								<label>NIP</label>
								<input type='text'
								       name="nip"
								       placeholder={'NIP'}
								       onChange={this.props.handleClientNIP}
								/>
								<div
									className={'error--message'}>{this.props.NipErrorAlert}</div>
							</div>

							<RegularButton text={'Dodaj klienta'}
							               onClick={this.props.handleAddNewClient}/>
						</div>


					</form>
				</div>
			</div>
		);
	}

}

export default AddClient;