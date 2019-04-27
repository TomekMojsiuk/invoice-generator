import React from 'react';
import NumberFormat from 'react-number-format';

import './NewLineElements.scss';

class NewLineElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          id: '',
          name: '',
          price: '',
          quantity: '',
          unit: '',
          vat: '',
          total: '',
        },
      ],
    };
  }

  componentDidMount() {}

  productNameOnChange = (e) => {
    this.props.products.map((product) => {
      if (product.productName === e.target.value) {
        return this.setState({
          id: product.id,
          price: product.productPrice,
          unit: product.productUnit,
          vat: product.productVat,
        });
      } else {
        return null;
      }
    });
  };

  productQuantityOnChange = (e) => {
    let counter = +e.target.value;

    if (counter.value > 0) {
      this.setState({
        quantity: counter,
        brutto: counter * +this.state.price,
      });
    }
  };

  render() {
    let NumberFormat = require('react-number-format');

    return (
      <div className={'new--line--container'}>
        {/*========================= counter =========================*/}
        <div className={'form--input'}>
          <input name="productPrice" type="text" value={this.props.counter} />
        </div>

        {/*========================= product inputs =========================*/}
        <div className={'form--input'}>
          <select
            onChange={this.productNameOnChange}
            value={this.props.chosenProductName}
          >
            <option defaultValue={''}>Wybierz produkt</option>
            {this.props.products.map((product) => {
              return (
                <option key={product.productId} value={product.productName}>
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
            value={this.state.price}
          />
        </div>

        <div className={'form--input'}>
          <input
            name="productQuantity"
            type="text"
            placeholder="Liczba szt"
            onChange={this.productQuantityOnChange}
          />
        </div>

        <div className={'form--input'}>
          <input
            name="productUnit"
            type="text"
            placeholder="Jednostka"
            defaultValue={this.state.unit}
          />
        </div>

        <div className={'form--input'}>
          <NumberFormat
            thousandSeparator={false}
            placeholder={'stawka VAT'}
            suffix={'%'}
            value={this.state.vat}
          />
        </div>

        <div className={'form--input'}>
          <NumberFormat
            thousandSeparator={true}
            placeholder={'Cena brutto'}
            suffix={' zł'}
            value={this.state.brutto}
          />
        </div>
      </div>
    );
  }
}

export default NewLineElements;
