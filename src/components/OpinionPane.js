import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/OpinionPane.css';

function OpinionPane() {
	return (
		<div className="container" style={{position: "relative", top: "20%"}}>
			<div className="row">
				<div className="col-5">
					<div className="d-flex flex-column description-box p-4">
						<span>What's your opinion on</span>
						<h1>Pope Francis?</h1>
						<p>He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
						<div className="d-flex flex-row mb-4">
							<FontAwesomeIcon icon={["fa", "wikipedia-w"]} />
							<a href="www.wikipedia.com">More information</a>
						</div>
						<span><strong>What's your veredict?</strong></span>
					</div>
					<div className="w-100">
						<button className="green-button w-50 py-2"><FontAwesomeIcon icon={["fa", "thumbs-up"]} /></button>
						<button className="yellow-button w-50 py-2"><FontAwesomeIcon icon={["fa", "thumbs-down"]} /></button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OpinionPane;
