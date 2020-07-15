import React from 'react';
import '../styles/DeadlinePane.css';

function DeadlinePane() {
	return (
		<div className="container-fluid to-bottom">
			<div class="row justify-content-start">
				<div className="col-4 py-2 black-blur text-right">
					<span className="uppercase text-white">closing in</span>
				</div>
				<div className="col-8 py-2 white-blur">
					<span className="capitalize dead-line"><strong>22</strong> days</span>
				</div>
			</div>
		</div>
	);
}

export default DeadlinePane;
