import React from 'react';

import './NewLineElements.scss';

class NewLineElements extends React.Component {
	constructor () {
		super();

	}

	render () {

		return (<div className={'new--line--container'}>

				{/*========================= counter =========================*/}
				<div className={'form--input'}>
					<input name="productPrice" type="text"
					       value={this.props.counter}/>
				</div>

				{/*========================= product inputs =========================*/}
				<div className={'form--input'}>

					<select onChange={this.props.onChange}
					        value={this.props.chosenProductName}>
						<option defaultValue={''}>Wybierz produkt</option>
						{this.props.products.map(product => {
							return <option key={product.productId}
							               value={product.productName}>{product.productName}</option>;
						})}
					</select>
				</div>
				<div className={'form--input'}>
					<input name="productPrice" type="text"
					       placeholder="Cena netto / szt"/>
				</div>

				<div className={'form--input'}>
					<input name="productQuantity" type="number"
					       placeholder="Liczba szt"/>
				</div>

				<div className={'form--input'}>
					<select onChange={''}
					        defaultValue={''}>
						<option value={''}>Jednostka</option>
						<option value={'szt'}>Szt</option>
						<option value={'kg'}>Kg</option>
					</select>
				</div>

				<div className={'form--input'}>
					<select onChange={''}
					        defaultValue={'Wybierz wysokość VAT'}>
						<option value={''}>VAT</option>
						<option value={'23'}>23%</option>
						<option value={'8'}>8%</option>
					</select>
				</div>

			</div>
		);
	}
}

export default NewLineElements;