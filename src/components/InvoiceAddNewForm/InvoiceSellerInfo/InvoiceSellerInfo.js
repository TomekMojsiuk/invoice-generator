import React from 'react'

class InvoiceSellerInfo extends React.Component {

	constructor (props) {
		super(props);

	}

	render () {
		return (<div className={'form--section seller--data'}>

				<h2 className={'form--section--title'}>Sprzedawca</h2>

				<div className={'form--input'}>

					<select onChange={this.props.selectOnChange}
					        value={this.props.selectValue}>
						<option defaultValue={''}>Wybierz sprzedawcę</option>
						{this.props.sellers.map(seller => {
							return <option key={seller.sellerNIP}
							               value={seller.sellerName}>{seller.sellerName}</option>;
						})}
					</select>

				</div>

				<div className={'form--input'}>
					<label>Dane sprzedawcy:</label>
					<textarea className={'form--textarea'}
					          value={this.props.textAreaValue}/>
				</div>

			</div>
		);
	}
}

export default InvoiceSellerInfo