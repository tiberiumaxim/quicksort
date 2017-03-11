const interchange = require('./interchange');

function partition (A, p, r) {
	const pivot = A[p];
	let i = p;
	let j = r;

	while (i < j) {
		while (A[j] > pivot) {
			j--;
		}
		while (A[i] < pivot) {
			i++;
		}
		if (i < j) {
			interchange(A, i, j);
			j--;
			i++;
		}
	}

	return j;
}

module.exports = partition;