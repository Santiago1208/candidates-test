import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/NavigationBar.css';

function NavigationBar() {
	return (
		<div className="container my-4">
			<div className="row">
				<div className="col-6">
					<h1 className="title">rule of thumb</h1>
				</div>
				<div className="col-6">
					<div className="d-flex justify-content-end pt-2">
						<a href="#" className="title pr-4 menu-item">past trials</a>
						<a href="#" className="title pr-4 menu-item">how it works</a>
						<a href="#" className="title pr-4 menu-item">login/sign up</a>
						<a href="#" className="title pr-4 menu-item"><FontAwesomeIcon icon="search" /></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavigationBar;
