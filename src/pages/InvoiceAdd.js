import React from 'react'

class InvoiceAdd extends React.Component{

	constructor (props) {
		super(props);
		this.state = {
			newInvoice: []
		}
	}

	render () {
		return (<div className={'col-10'}>
				<form>
					<label>
						Numer faktury:
						<input type="text" name="numer_faktury"/>
					</label>
					<label>
						Data wystawienia:
						<input type="date"/>
					</label>
					<label>
						Data płatności:
						<input type="date"/>
					</label>
				</form>
				</div>
		)
	}
}

export default InvoiceAdd;