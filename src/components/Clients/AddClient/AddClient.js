import React from 'react';

class AddClient extends React.Component {
	constructor (props) {
		super(props);
		this.state = {

		};
	}

	render () {


		return (
			<div className={'col-10 pages--content--container'}>
				<h1>Dodaj kontrahenta</h1>
				<form>
					<div className={'flex--wrapper--2'}>

					<div className={'form--input'}>
						<label>Nazwa firmy</label>
						<input type='text'
						       name="nazwa"
						       placeholder={'Nazwa firmy'}
						       onChange={this.props.handleClientName}
						/>
						<small className={'validation-error'}>{this.props.clientNameError
							? this.props.clientNameError
							: ''}</small>
					</div>


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



						<div className={'form--input'}>
							<label>Numer</label>
							<input type='text'
							       name="kod"
							       placeholder='Kod pocztowy'
							       onChange={this.props.handleClientPostCode}
							/>
						</div>

						<div className={'form--input'}>
							<label>Numer</label>
							<input type='text'
							       name="miasto"
							       placeholder={'Miasto'}
							       onChange={this.props.handleClientCityName}
							/>
						</div>

						<div className={'form--input'}>
							<label>Numer</label>
							<input type='text'
							       name="nip"
							       placeholder={'NIP'}
							       onChange={this.props.handleClientNIP}
							/>
							<div className={"error--message"}>{this.props.NipErrorAlert}</div>
						</div>

					</div>


				</form>
			</div>
		);
	}

}

/*handleClientName={this.handleClientName}
handleClientNIP={this.handleClientNIP}
handleclientStreetAddress={this.handleClientStreetAddress}
handleClientStreetNumber={this.handleClientStreetNumber}
handleClientPostCode={this.handleClientPostCode}
handleClientCityName={this.handleClientCityName}*/

export default AddClient;