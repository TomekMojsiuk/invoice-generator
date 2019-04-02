import React from 'react'
import './loadingBar.scss'


export const LoadingBar = () => {
	return (
		<div className="c-loader-bar">
			<h1>Loading...</h1>
			<div className="c-loader-bar__indicator"></div>
		</div>
	)
}