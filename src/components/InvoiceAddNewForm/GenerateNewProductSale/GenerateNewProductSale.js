import React from 'react'

class NewLine extends React.Component {
	constructor () {
		super ()

	}

	render () {
		return (
			<select onChange={this.props.onChange}
			        value={this.props.chosenProductName}>
				<option defaultValue={''}>Wybierz produkt</option>
				{this.props.products.map(product => {
					return <option key={product.productId}
					               value={product.productName}>{product.productName}</option>;
				})}
			</select>
		)
	}
}

class GenerateNewProductSale extends React.Component {
	constructor (props) {
		super(props);

	}

	render () {

		let newProductSale = [];

		for (var i=0; i < 4; i++) {

			newProductSale.push(<NewLine />)

		}

			return (
				<ul>
					<li>{newProductSale}</li>
				</ul>
			)
	}

}

export default GenerateNewProductSale;