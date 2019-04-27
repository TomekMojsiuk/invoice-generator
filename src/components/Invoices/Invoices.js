import React from 'react';
import './Invoices.scss';

class Invoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: [],
    };
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    const invoices =
      this.props.invoices.map((invoice) => {
        return invoice.invoiceNumber;
      }) || [];

    let counter = 0;

    const MyCol = (props) => {
      return <div className={'item'} {...props} />;
    };

    return (
      <div className={'pages--content--container col-10'}>
        <div className={'flex--wrapper--4'}>
          {invoices && invoices.length ? (
            <h1>Lista faktur</h1>
          ) : (
            <h1>Brak faktur</h1>
          )}
          <div className={'invoice--list--header'}>
            <MyCol>LP</MyCol>
            <MyCol>Numer faktury</MyCol>
            <MyCol>Data wystawienia</MyCol>
            <MyCol>Data płatności</MyCol>
            <MyCol>Kupujący</MyCol>
            <MyCol>Kwota</MyCol>
          </div>

          <div className={'invoice--list--body'}>
            {this.props.invoices.map((invoice) => {
              return (
                <div key={() => Math.floor(Math.random() * 100000)}
                  className={`invoice--container`}
                >
                  <MyCol key={invoice.invoiceNumber}>{(counter += 1)}</MyCol>
                  <MyCol>{invoice.invoiceNumber}</MyCol>
                  <MyCol>{invoice.issuingDate}</MyCol>
                  <MyCol>{invoice.dueDate}</MyCol>
                  <MyCol>{invoice.client.name}</MyCol>
                  <MyCol>{`${invoice.products.reduce((acc, product) => {
                    return acc + product.quantity * product.price;
                  }, 0)} zł`}</MyCol>

                  <div className={'invoice--details'} key={invoice}>
                    <div className={'invoice--details--header'}>
                      <MyCol>Produkt</MyCol>
                      <MyCol>Cena cetto</MyCol>
                      <MyCol>Ilość</MyCol>
                      <MyCol>Jednostka</MyCol>
                      <MyCol>VAT</MyCol>
                      <MyCol>Total</MyCol>
                    </div>

                    {invoice.products.map((product) => {
                      return (
                        <div
                          key={product.name}
                          className={'invoice--details--body'}
                        >
                          <MyCol>{product.name}</MyCol>
                          <MyCol>{product.price}</MyCol>
                          <MyCol>{product.quantity}</MyCol>
                          <MyCol>{product.unit}</MyCol>
                          <MyCol>{product.vat}</MyCol>
                          <MyCol>{product.total}</MyCol>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={'row invoice--list--footer'}>
            <MyCol>{counter}</MyCol>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoices;
