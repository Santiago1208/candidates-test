import React from 'react';

import Candidate from './Candidate';
import VoteStatistic from '../model/VoteStatistic';

function Votes() {
	return (
		<div>
			<h3>Votes</h3>
			<ul>
				<Candidate name="Kanye West" photo="/images/kanye_west.jpeg" headline="1 month ago in Entertainment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum velit eget aliquet tristique. Curabitur feugiat pretium quam, vulputate porttitor sapien feugiat nec. Etiam dignissim urna posuere nisi efficitur, a vehicula lorem consequat." statistics={new VoteStatistic(15, 10, 5)}/>
				<Candidate name="Mark Zuckenberg" photo="/images/mark_zuckenberg.jpg" headline="1 month ago in Business" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum velit eget aliquet tristique. Curabitur feugiat pretium quam, vulputate porttitor sapien feugiat nec. Etiam dignissim urna posuere nisi efficitur, a vehicula lorem consequat." statistics={new VoteStatistic(20, 10, 10)} />
				<Candidate name="Cristina Fernández de Kirchner" photo="/images/cristina_fernandez.jpg" headline="1 month ago in Politics" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum velit eget aliquet tristique. Curabitur feugiat pretium quam, vulputate porttitor sapien feugiat nec. Etiam dignissim urna posuere nisi efficitur, a vehicula lorem consequat." statistics={new VoteStatistic(20, 6, 14)}/>
				<Candidate name="Malala Yousafzai" photo="/images/malala.jpg" headline="1 month ago in Entertainment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum velit eget aliquet tristique. Curabitur feugiat pretium quam, vulputate porttitor sapien feugiat nec. Etiam dignissim urna posuere nisi efficitur, a vehicula lorem consequat." statistics={new VoteStatistic(26, 15, 11)} />
			</ul>
		</div>
	);
}

export default Votes;
