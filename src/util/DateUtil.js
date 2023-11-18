function ascDateComparator(a, b) {
	const first = new Date(a.created_at).getTime();
	const second = new Date(b.created_at).getTime();
	if (first > second) {
		return 1;
	}
	if (first < second) {
		return -1;
	}
	return 0;
}

function toUnixTimestamp(date = new Date()) {
	return parseInt((date.getTime() / 1000).toFixed(0));
}

module.exports = {
	ascDateComparator,
	toUnixTimestamp,
};
