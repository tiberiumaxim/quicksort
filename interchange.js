function interchange(A, i, j) {
	A[i] = A[i] + A[j];
	A[j] = A[i] - A[j];
	A[i] = A[i] - A[j];
}

module.exports = interchange;