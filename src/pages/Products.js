import React from 'react';

import SideNav from '../components/SideNav/SideNav';
import ProductsList from '../components/Products/ProductsList/ProductsList';
import AddProduct from '../components/Products/AddProduct/AddProduct';

import './_Pages.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localhost:3001/products',
      products: [],

      id: 0,
      productName: '',
      productPrice: '',
      productQuantity: '',
      productUnit: '',
      productVat: '',
      productTotal: '',

      addNewProduct: false,
      errorMessage: [],
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((products) =>
        this.setState({
          products: products,
        }),
      )
      .then(() => {
        console.log(this.state.products);
      })
      .catch((error) => {
        return error.message;
      });
  }

  displayNewProductForm = () => {
    this.setState({
      addNewProduct: true,
    });
  };

  /*====================================== Product data handlers ======================================*/

  handleProductName = (e) => {
    this.setState({
      productName: e.target.value,
    });
  };

  handleProductPrice = (e) => {
    this.setState({
      productPrice: e.target.value,
    });
  };

  handleProductUnit = (e) => {
    this.setState({
      productUnit: e.target.value,
    });
  };

  handleProductVat = (e) => {
    this.setState({
      productVat: e.target.value,
    });
  };

  /*====================================== Product add, remove, edit handlers ======================================*/

  handleReturn = (e) => {
    this.setState({
      addNewProduct: false,
    });
  };

  handleAddNewProduct = (e) => {
    e.preventDefault();

    let url = this.state.url;

    let product = {
      id: 0,
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      productUnit: this.state.productUnit,
      productVat: this.state.productVat,
      productTotal: 0,
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(product),
      redirect: 'manual',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch((error) => console.error('Error:', error));
  };

  handleEditProductData = (e) => {
    this.state.products.find((product) => {
      if (product.productId === e.target.id) {
        return product;
      }

      /*		this.setState({

					})*/
    });
  };

  handleDeleteProductData = (e) => {
    this.state.products.find((product) => {
      if (product.id === +e.target.id) {
        return fetch('http://localhost:3001/products' + '/' + product.id, {
          method: 'DELETE',
          body: JSON.stringify(product),
          redirect: 'manual',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((response) => console.log('Success:', JSON.stringify(response)))
          .catch((error) => console.error('Error:', error));
      }
    });
  };

  /*====================================== Form Validation ======================================*/

  render() {
    return (
      <div className={'row main--content--box'}>
        <SideNav />

        {!this.state.addNewProduct ? (
          <ProductsList
            products={this.state.products}
            handleDeleteProductData={this.handleDeleteProductData}
            displayNewProductForm={this.displayNewProductForm}
          />
        ) : (
          <AddProduct
            handleAddNewProduct={this.handleAddNewProduct}
            handleReturn={this.handleReturn}
            handleProductName={this.handleProductName}
            handleProductPrice={this.handleProductPrice}
            handleProductUnit={this.handleProductUnit}
            handleProductVat={this.handleProductVat}
          />
        )}
      </div>
    );
  }
}

export default Products;
