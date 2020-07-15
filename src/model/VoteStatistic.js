class VoteStatistic {
	constructor(totalVotes, totalThumbsUp, totalThumbsDown) {
		this.totalVotes = totalVotes;
		this.totalThumbsUp = totalThumbsUp;
		this.totalThumbsDown = totalThumbsDown;
	}

	get totalVotes() {
		return this._totalVotes;
	}

	set totalVotes(newTotalVotes) {
		this._totalVotes = newTotalVotes;
	}

	get totalThumbsUp() {
		return this._totalThumbsUp;
	}

	set totalThumbsUp(newTotalThumbsUp) {
		this._totalThumbsUp = newTotalThumbsUp;
	}

	get totalThumbsDown() {
		return this._totalThumbsDown;
	}

	set totalThumbsDown(newTotalThumbsDown) {
		this._totalThumbsDown = newTotalThumbsDown;
	}

}

export default VoteStatistic;
