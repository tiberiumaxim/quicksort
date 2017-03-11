const assert = require('assert');
const _ = require('lodash');
const partition = require('./../partition');
const interchange = require('./../interchange');
const sort = require('./../sort');

describe('Interchange', function () {
	const arr = [5, 3, 2, 6, 4, 1, 3, 7];
	interchange(arr, 0, 1);
	interchange(arr, 2, 7);
	interchange(arr, 0, 6);

	it ('should interchange arr values', function () {
		assert.equal(arr[0], 3);
		assert.equal(arr[1], 5);
		assert.equal(arr[2], 7);
		assert.equal(arr[7], 2);
		assert.equal(arr[0], 3);
		assert.equal(arr[6], 3);
	});
});

describe('Partition', function () {
	const arr = [5, 3, 2, 6, 4, 1, 3, 7];
	it ('should partition correctly | step 1', function () {
		const q = partition(arr, 0, arr.length - 1);
		assert.equal(q, 4);
	});

	it ('should partition correctly | step 2', function () {
		const q = partition(arr, 0, 4);
		assert.equal(q, 1);
	});
});

describe('Sort', function () {
	const arr = [5, 3, 2, 6, 4, 1, 3, 7];

	it ('should sort the entire array', function () {
		sort(arr, 0, arr.length - 1);
		assert.deepEqual(arr, [1, 2, 3, 3, 4, 5, 6, 7]);
	});
});