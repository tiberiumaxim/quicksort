const assert = require('assert');
const _ = require('lodash');
const partition = require('./../partition');


describe('Partition', function () {
	const arr = [5, 3, 2, 6, 4, 1, 3, 7];
	it ('should partition correctly', function () {
		const q = partition(arr, 0, arr.length - 1);
		assert.equal(q, 4);
	});
});