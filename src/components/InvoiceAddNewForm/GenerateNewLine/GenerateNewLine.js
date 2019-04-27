import React from 'react';

import NewLineElements from '../NewLineElements/NewLineElements'
import RegularButton from '../../Buttons/RegularButton/RegularButton';
import InvoiceAddNewForm from '../../../pages/InvoiceAddNew';

class GenerateNewLine extends React.Component {
	constructor (props) {
		super(props);

	}

	componentDidUpdate (prevProps, prevState, snapshot) {

	}

	render () {

		let newProductLine = [];
		let counter = 0

		for (var i = 0; i < this.props.addNewLineCounter; i++) {
			counter +=1;
			newProductLine.push(<NewLineElements
														products={this.props.products}
														counter={counter}
														handleAddProducts={this.props.handleAddProducts}
													/>);
		}



		return (
				<div className={'form--section invoice--details'}>

					<h2 className={'form--section--title'}>Linia kosztowa</h2>

					<div className={"invoice--details--buttons--container"}>
						<RegularButton text={'Dodaj'} onClick={this.props.addNewProductLine}/>
						<RegularButton text={'Usuń'} onClick={this.props.removeNewProduct}/>
						<div>{this.props.addNewLineCounterError}</div>

					</div>
				{newProductLine}
			</div>
		);
	}

}

export default GenerateNewLine;