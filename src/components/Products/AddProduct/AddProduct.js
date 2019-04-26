import React from 'react';

import './AddProduct.scss';
import RegularButton from '../../Buttons/RegularButton/RegularButton';

class AddProduct extends React.Component {

	render () {

		const {handleAddNewProduct, handleProductName, handleProductPrice, handleProductUnit, handleProductVat, handleReturn } = this.props

		return (
			<div className={'col-10 pages--content--container'}>

				<div className={'flex--wrapper--2'}>
					<h1>Dodaj produkt</h1>
				</div>

				<div className={'add--client--form__container'}>

					<form className={"add--product"} onSubmit={handleAddNewProduct}>
						<div className={'flex--wrapper--2'}>

							<div className={'form--input'}>
								<label>Nazwa produktu</label>
								<input type='text'
								       name="nazwa_produktu"
								       placeholder={'Nazwa produktu'}
								       onChange={handleProductName}
								/>
							</div>
							<div className={'flex--wrapper--1 price-container'}>

								<div className={'form--input'}>
									<label>Ulica</label>
									<input className={'price'}
									       type='text'
									       name="cena"
									       placeholder={'Cena netto'}
									       prefix={"zł"}
									       onChange={handleProductPrice}
									/>
								</div>

								<div className={'form--input'}>
									<label>Numer</label>
									<input className={'currency'}
									       type='text'
									       name="numer"
									       value={"zł"}
									/>
								</div>
							</div>


							<div className={'form--input'}>
								<label>Jednostka miaty</label>
								<input type='text'
								       name="kod"
								       placeholder='Jednostka miary'
								       onChange={handleProductUnit}
								/>
							</div>

							<div className={'form--input'}>
								<label>Vat</label>
								<input type='text'
								       name="miasto"
								       placeholder={'Vat'}
								       onChange={handleProductVat}
								/>
							</div>

							<div className={'flex--wrapper--1'}>
								<RegularButton text={'Dodaj produkt'}
								               onClick={handleAddNewProduct}/>

								<RegularButton text={'Wróć do listy produktów'}
								               onClick={handleReturn}/>
							</div>
						</div>


					</form>
				</div>
			</div>
		);
	}

}

export default AddProduct;