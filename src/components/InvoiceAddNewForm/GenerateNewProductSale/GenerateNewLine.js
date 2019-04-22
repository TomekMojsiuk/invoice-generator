import React from 'react';

import NewLineElements from '../NewLineElements/NewLineElements'

class GenerateNewLine extends React.Component {
	constructor (props) {
		super(props);

	}

	render () {

		let newProductSale = [];
		let counter = 0

		for (var i = 0; i < this.props.addNewLineCounter; i++) {
			counter +=1;
			newProductSale.push(<NewLineElements products={this.props.products} counter={counter}/>);
		}



		return (
			<div>
				{newProductSale}
			</div>
		);
	}

}

export default GenerateNewLine;