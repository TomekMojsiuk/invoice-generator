import React from 'react'
import "../components/NotFound/_NotFoundContent.scss"
import './_Pages.scss'


class NotFound extends React.Component {
	render () {
		return (<div className={'link--not--found'}>
			<h1>Lookin' for somethin'?</h1>
			<p>The page you're looking for most probably does not exist.
				You better get yourself logged in before you use the app.</p>
			<div className={'link--not--found_img'}/>
		</div>)
	}
}

export default NotFound;