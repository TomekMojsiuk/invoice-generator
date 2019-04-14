import React from 'react'

import './_Pages.scss'

class NotFound extends React.Component {
	render () {
		return (<div className={'link--not--found'}>
			<h1>404</h1>
			<h1>Nie ma takiej strony :(</h1>
		</div>)
	}
}

export default NotFound;