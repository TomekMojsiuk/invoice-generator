import React from 'react';

class InvoiceGeneralData extends React.Component {

	render () {
		return (<div className={'form--section'}>

				<div className={'flex--wrapper--1 invoice--general--data--container'}>

					<div className={'form--input invoice--general--data'}>
						<label>Numer faktury:</label>
						<input type='text'
						       name="Numer_faktury"
						       placeholder={'numer faktury'}
						       onChange={this.props.InvoiceNumberOnChange}
						/>

					</div>

					<div className={'form--input invoice--general--data'}>
						<label>Data wystawienia:</label>
						<input name="issueDate"
						       type={this.props.issueDateFieldType}
						       onFocus={this.props.onFocus}
						       onBlur={this.props.onBlur}
						       onChange={this.props.IssueDateOnChange}
						       placeholder="Podaj datę wystawienia faktury"
						/>

					</div>

					<div className={'form--input invoice--general--data'}>
						<label>Data płatności:</label>
						<input name="dueDate"
						       type={this.props.dueDateFieldType}
						       onFocus={this.props.onFocus}
						       onBlur={this.props.onBlur}
						       onChange={this.props.DueDateOnChange}
						       placeholder="Wprowadź datę płatności"
						/>

					</div>

				</div>
			</div>
		);
	}
}

export default InvoiceGeneralData;