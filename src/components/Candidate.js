import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Banner.css';

function Candidate(props) {
	console.log(props.statistics.totalVotes);
	return (
		<li>
			<div>
				<div>
					<FontAwesomeIcon icon={["fa", "thumbs-up"]} />
					<span>{props.name}</span>
					<br/>
					<span>{props.headline}</span>
				</div>
				<div>
					<p>{props.description}</p>
				</div>
				<div>
					<button><FontAwesomeIcon icon={["fa", "thumbs-up"]}/></button>
					<button><FontAwesomeIcon icon={["fa", "thumbs-down"]}/></button>
					<button>Vote now</button>
				</div>
				<div>
					<div>
						<FontAwesomeIcon icon={["fa", "thumbs-up"]} />
						<span>{`${props.statistics.totalThumbsUp / props.statistics.totalVotes * 100} %`}</span>
					</div>
					<div>
						<FontAwesomeIcon icon={["fa", "thumbs-down"]} />
						<span>{`${props.statistics.totalThumbsDown / props.statistics.totalVotes * 100} %`}</span>
					</div>
				</div>
			</div>
		</li>
	);
}

export default Candidate;
