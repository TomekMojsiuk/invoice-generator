import React from 'react';
import NumberFormat from 'react-number-format'

import './NewLineElements.scss';

class NewLineElements extends React.Component {

//todo dokończyć komponent. inputy powinny aktualizować stan głównego komponentu!!!

	constructor (props) {
		super(props);
		this.state = {

			product: [
				{
					name: '',
					price: '',
					quantity: '',
					unit: '',
					vat: '',
					brutto: '',
				}
			]
		}
	}

	productNameOnChange = (e) => {

		this.props.products.map(product => {

			if (product.productName === e.target.value) {
				this.setState({
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

	if (e.target.value > 0) {

		let totalNet = Number(this.state.price * this.state.quantity)
		let vat = (Number(this.state.price * this.state.vat) / 100) * this.state.quantity
		let brutto = totalNet + vat;

		this.setState({
			quantity: e.target.value,
			brutto: brutto
		})

	} else {
		this.setState({
			quantity: e.target.value,
			brutto: 0
		})
	}

	}


	render () {

		let NumberFormat = require('react-number-format')

		return (<div className={'new--line--container'}>

				{/*========================= counter =========================*/}
				<div className={'form--input'}>
					<input name="productPrice" type="text"
					       value={this.props.counter}/>
				</div>

				{/*========================= product inputs =========================*/}
				<div className={'form--input'}>

					<select onChange={this.productNameOnChange}
					        value={this.props.chosenProductName}>
						<option defaultValue={''}>Wybierz produkt</option>
						{this.props.products.map(product => {
							return <option key={product.productId}
							               value={product.productName}>{product.productName}</option>;
						})}
					</select>
				</div>
				<div className={'form--input'}>
					<NumberFormat thousandSeparator={true}
												placeholder={'Cena netto'}
					              suffix={' zł'}
					              value={this.state.price} />
				</div>

				<div className={'form--input'}>
					<input name="productQuantity" type="number"
					       placeholder="Liczba szt" onChange={this.productQuantityOnChange}/>
				</div>

				<div className={'form--input'}>
					<input name="productUnit" type="text"
					       placeholder="Jednostka" defaultValue={this.state.unit}/>
				</div>



				<div className={'form--input'}>
					<NumberFormat thousandSeparator={false}
					              placeholder={'stawka VAT'}
					              suffix={"%"}
					              value={this.state.vat} />
				</div>

				<div className={'form--input'}>
					<NumberFormat thousandSeparator={true}
					              placeholder={'Cena brutto'}
					              suffix={" zł"}
					              value={this.state.brutto} />
				</div>



			</div>
		);
	}
}

export default NewLineElements;