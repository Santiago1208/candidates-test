import React from 'react';
import '../styles/Banner.css';

import NavigationBar from './NavigationBar';
import OpinionPane from './OpinionPane';
import DeadlinePane from './DeadlinePane';

function Banner() {
	return(
		<div className="background-image">
			<NavigationBar />
			<OpinionPane />
			<DeadlinePane />
		</div>
	);
}

export default Banner;
