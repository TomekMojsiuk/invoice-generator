import React from 'react';

import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import EditButton from '../../Buttons/EditButton/EditButton';

import '../../../sass/_colors.scss';
import '../../../sass/_flex.scss';
import './ProductsList.scss';
import AddProductButton from '../../Buttons/AddProductButton/AddProductButton';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editProduct: false,
      removeProduct: false,
    };
  }

  render() {
    return (
      <div className={'col-10 pages--content--container'}>
        <div className={'flex--wrapper--2'}>
          <h1>Produkty</h1>
        </div>

        <div className={'flex--wrapper--3'}>
          {this.props.products.map((product) => {
            return (
              <div className={'content--container--small'}>
                <h1>{product.productName}</h1>
                <div>cena netto: {product.productPrice}</div>
                <div>jednostka miary: {product.productUnit}</div>
                <div>VAT: {product.productVat}%</div>

                <div className={'container--small--buttons--section'}>
                  <DeleteButton
                    deleteKey={product.id}
                    onClick={this.props.handleDeleteProductData}
                  />
                  <EditButton key={''} onClick={this.props.editButtonOnClick} />
                </div>
              </div>
            );
          })}

          <div className={'content--container--small'}>
            <AddProductButton onClick={this.props.displayNewProductForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;
