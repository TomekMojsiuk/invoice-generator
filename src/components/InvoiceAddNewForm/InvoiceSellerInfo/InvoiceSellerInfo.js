import React from 'react';

class InvoiceSellerInfo extends React.Component {
  render() {
    return (
      <div className={'form--section seller--data'}>
        <h2 className={'form--section--title'}>Sprzedawca</h2>

        <div className={'form--input'}>
          <select
            onChange={this.props.sellerSelectOnChange}
            value={this.props.sellerSelectValue}
          >
            <option defaultValue={''}>Wybierz sprzedawcę</option>
            {this.props.sellers.map((seller) => {
              return (
                <option
                  key={seller.sellerNIP}
                  value={seller.sellerName}
                  onChange={this.props.InvoiveSeller}
                >
                  {seller.sellerName}
                </option>
              );
            })}
          </select>
        </div>

        <div className={'form--input'}>
          <label>Dane sprzedawcy:</label>
          <textarea
            className={'form--textarea'}
            readOnly={true}
            value={this.props.sellerTextAreaValue}
          />
        </div>
      </div>
    );
  }
}

export default InvoiceSellerInfo;
