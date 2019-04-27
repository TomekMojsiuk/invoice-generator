import React from 'react';

import NewLineElements from '../NewLineElements/NewLineElements';
import RegularButton from '../../Buttons/RegularButton/RegularButton';
import InvoiceAddNewForm from '../../../pages/InvoiceAddNew';



class GenerateNewLine extends React.Component {
  render() {
    console.log({ invoiceProducts: this.props.invoiceProducts })
    const invoiceProductsArray = Object.values(this.props.invoiceProducts);

    console.log({ invoiceProductsArray });

    return (
      <div className={'form--section invoice--details'}>
        <h2 className={'form--section--title'}>Linia kosztowa</h2>

        <div className={'invoice--details--buttons--container'}>
          <RegularButton
            text={'Dodaj'}
            onClick={this.props.addNewProductLine}
          />
          <RegularButton text={'Usuń'} onClick={this.props.removeNewProduct} />
          <div>{this.props.addNewLineCounterError}</div>
        </div>
        {invoiceProductsArray.map((line) => (
          <NewLineElements
            key={line.id}
            line={line}
            products={this.props.products}
            onLineChange={this.props.onLineChange}
          />
        ))}
      </div>
    );
  }
}

export default GenerateNewLine;
