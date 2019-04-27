import React from 'react';
import RegularButton from '../../Buttons/RegularButton/RegularButton';

import './AddClient.scss';

class AddClient extends React.Component {
  render() {
    const {
      handleAddNewClient,
      handleClientName,
      handleClientStreetAddress,
      handleClientStreetNumber,
      handleClientPostCode,
      handleClientCityName,
      handleClientNIP,
      handleReturn,
    } = this.props;

    return (
      <div className={'col-10 pages--content--container'}>
        <div className={'flex--wrapper--2'}>
          <h1>Dodaj klienta</h1>
        </div>

        <div className={'add--client--form__container'}>
          <form onSubmit={handleAddNewClient}>
            <div className={'flex--wrapper--2'}>
              <div className={'form--input'}>
                <label>Nazwa firmy</label>
                <input
                  type="text"
                  name="nazwa"
                  placeholder={'Nazwa firmy'}
                  onChange={handleClientName}
                />
              </div>
              <div className={'flex--wrapper--1'}>
                <div className={'form--input'}>
                  <label>Ulica</label>
                  <input
                    type="text"
                    name="ulica"
                    placeholder={'Ulica'}
                    onChange={handleClientStreetAddress}
                  />
                </div>

                <div className={'form--input'}>
                  <label>Numer</label>
                  <input
                    type="text"
                    name="numer"
                    placeholder={'Numer'}
                    onChange={handleClientStreetNumber}
                  />
                </div>
              </div>

              <div className={'form--input'}>
                <label>Kod pocztowy</label>
                <input
                  type="text"
                  name="kod"
                  placeholder="Kod pocztowy"
                  onChange={handleClientPostCode}
                />
              </div>

              <div className={'form--input'}>
                <label>Miasto</label>
                <input
                  type="text"
                  name="miasto"
                  placeholder={'Miasto'}
                  onChange={handleClientCityName}
                />
              </div>

              <div className={'form--input'}>
                <label>NIP</label>
                <input
                  type="text"
                  name="nip"
                  placeholder={'NIP'}
                  onChange={handleClientNIP}
                />
                <div className={'error--message'}>
                  {this.props.NipErrorAlert}
                </div>
              </div>

              <div className={'flex--wrapper--1'}>
                <RegularButton
                  text={'Dodaj klienta'}
                  onClick={handleAddNewClient}
                />

                <RegularButton
                  text={'Wróć do listy klientów'}
                  onClick={handleReturn}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddClient;
