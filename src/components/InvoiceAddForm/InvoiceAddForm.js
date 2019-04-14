import React from 'react'

class InvoiceAddForm extends React.Component {

	render () {
		return (<div className={'col-10 pages--content--container'}>
			<form>
				<div className={'col-12'}>
					<label>Numer faktury:</label>
					<input type="text" name="numer_faktury" placeholder={"numer faktury"}/>
				</div>
				<div className={'col-12'}>
				<label>
					Data wystawienia:
					<input type="date" placeholder={'Podaj datę'}/>
				</label>
				</div>
				<div className={'col-12'}>
				<label>
					Data płatności:
					<input type="date"/>
				</label>
				</div>
			</form>
	</div>
		)
	}
}

export default InvoiceAddForm;