import React from 'react';
import NumberFormat from 'react-number-format';

import './NewLineElements.scss';

class NewLineElements extends React.Component {
  productOnChange = (lineId, productId) => {
    this.props.onLineChange(lineId, {
      productId,
    })
  };

  productQuantityOnChange = (lineId, quantity) => {
    if (quantity > 0) {
      this.props.onLineChange(lineId, {
        quantity,
      })
    }
  };

  render() {
    const selectedProduct = this.props.products.find((product) => product.id === this.props.line.productId)
    // console.log({ selectedProduct })
    const grossAmount = selectedProduct ? selectedProduct.vat / 100 * this.props.line.quantity * selectedProduct.price : '';

    // return null

    return (
      <div className={'new--line--container'}>
        {/*========================= counter =========================*/}
        <div className={'form--input'}>
          <input name="productPrice" type="text" value={this.props.counter} />
        </div>

        {/*========================= product inputs =========================*/}
        <div className={'form--input'}>
          <select
            onChange={(e) => this.productOnChange(this.props.line.id, e.target.value)}
            value={this.props.line.productId}
          >
            <option defaultValue={''}>Wybierz produkt</option>
            {this.props.products.map((product) => {
              return (
                <option key={product.productId} value={product.productId}>
                  {product.productName}
                </option>
              );
            })}
          </select>
        </div>
        <div className={'form--input'}>
          <NumberFormat
            thousandSeparator={true}
            placeholder={'Cena netto'}
            suffix={' zł'}
            value={selectedProduct ? selectedProduct.price : ''}
          />
        </div>

        <div className={'form--input'}>
          <input
            name="productQuantity"
            type="text"
            placeholder="Liczba szt"
            onChange={(e) => this.productQuantityOnChange(this.props.line.id, +e.target.value)}
          />
        </div>

        <div className={'form--input'}>
          <input
            name="productUnit"
            type="text"
            placeholder="Jednostka"
            defaultValue={selectedProduct ? selectedProduct.unit : ''}
          />
        </div>

        <div className={'form--input'}>
          <NumberFormat
            thousandSeparator={false}
            placeholder={'stawka VAT'}
            suffix={'%'}
            value={selectedProduct ? selectedProduct.vat : ''}
          />
        </div>

        <div className={'form--input'}>
          <NumberFormat
            thousandSeparator={true}
            placeholder={'Cena brutto'}
            suffix={' zł'}
            value={grossAmount}
          />
        </div>
      </div>
    );
  }
}

export default NewLineElements;
