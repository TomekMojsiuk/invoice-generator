import React from 'react'

class InvoiceGeneralData extends React.Component {


	render () {
		return (<div className={'form--section'}>

					<h2 className={'form--section--title'}>Dane faktury</h2>
					<div className={'flex--wrapper'}>

						<div className={'form--input invoice--data'}>
							<label>Numer faktury:</label>
							<input type='text' name="Numer_faktury"
							       placeholder={'numer faktury'}/>
						</div>

						<div className={'form--input invoice--data'}>
							<label>Data wystawienia:</label>
							<input name="issueDate" type={this.props.issueDateFieldType}
							       onFocus={this.props.onFocus} onBlur={this.props.onBlur}
							       placeholder="Podaj datę wystawienia faktury"/>
						</div>

						<div className={'form--input invoice--data'}>
							<label>Data płatności:</label>
							<input name="dueDate" type={this.props.dueDateFieldType}
							       onFocus={this.props.onFocus} onBlur={this.props.onBlur}
							       placeholder="Wprowadź datę płatności"/>
						</div>

					</div>
				</div>
		);
	}
}

export default InvoiceGeneralData;