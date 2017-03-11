const partition = require('./partition');

function sort (A, p, r) {
	if (p < r) {
		const q = partition(A, p, r);

		sort(A, p, q);
		sort(A, q + 1, r);
	}
}

module.exports = sort;