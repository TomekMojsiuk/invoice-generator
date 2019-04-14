import React from 'react'
import './_loadingBar.scss'

const LoadingBar = () => {
	return (
		<div className="c-loader-bar">
			<h1>Loading...</h1>
			<div className="c-loader-bar__indicator"></div>
		</div>
	)
}

export default LoadingBar;