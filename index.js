const sort = require('./sort');

const arr = [];

process.argv.slice(2).forEach(function (number) {
	arr.push(parseInt(number));
});

if (arr.length) {
	sort(arr, 0, arr.length - 1);
	console.log(arr);
}

module.exports = function (arr) {
	sort(arr, 0, arr.length - 1);

	return arr;
}