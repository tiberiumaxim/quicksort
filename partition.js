const interchange = require('./interchange');

function partition (A, p, r) {
	const pivot = A[p];
	let i = p;
	let j = r;
	let step = 1;

	while (/*i <= j*/ step <= 2) {
		console.log('step', step, A, i, j);
		while (A[j] > pivot) {
			console.log(A[j], 'decreasing j');
			j--;
		}
		while (A[i] < pivot) {
			console.log(A[i], 'increasing i');
			i++;
		}
		if (i < j) {
			interchange(A, i, j);
			j--;
			i++;
		}
		step++;
	}

	return j;
}

module.exports = partition;