import React from 'react';

class InvoiceClientInfo extends React.Component {
  render() {
    return (
      <div className={'form--section client--data'}>
        <h2 className={'form--section--title'}>Nabywca</h2>

        <div className={'form--input'}>
          <select
            onChange={this.props.clientSelectOnChange}
            value={this.props.clientSelectValue}
          >
            <option defaultValue={''}>Wybierz klienta</option>
            {this.props.clients.map((client) => {
              return (
                <option
                  key={client.clientNIP}
                  value={client.clientName}
                  onChange={this.props.InvoiceClient}
                >
                  {client.clientName}
                </option>
              );
            })}
          </select>
        </div>

        <div className={'form--input'}>
          <label>Dane nabywcy:</label>
          <textarea
            className={'form--textarea'}
            readOnly={true}
            name="Dane Nabywcy"
            placeholder={'Wybierz z listy lub wprowadź dane ręcznie'}
            value={this.props.clientTextAreaValue}
          />
        </div>
      </div>
    );
  }
}

export default InvoiceClientInfo;
